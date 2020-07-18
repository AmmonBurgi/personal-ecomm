import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './cart.css'
import { toast } from 'react-toastify'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
 
function Cart(props){
    const [cart, setCart] = useState([])

    const getCart = () => {
        axios.get('/api/cart')
    .then(res => {
        setCart(res.data)
    }).catch(err => console.log(err))
    }

    const deleteAllCart = () => {
        const {user_id} = props.user
        axios.delete(`/api/empty-cart/?id=${user_id}`)
        .then(() => {
            console.log('Payment complete! Cleared Cart!')
            getCart()
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        // console.log(props.location)
        if(props.location.state === '/checkout'){
            deleteAllCart()
        } else {getCart()}
    
    }, [])

    const deleteCart = (pro_id) => {
        axios.delete(`/api/cart/?pro_id=${pro_id}`)
        .then(() => {
            toast.info('Removed from Cart!')
            getCart()
            getTotal()
        }).catch(err => console.log(err))
    }

    const cartMap = cart.map((element, index) => {
        return <div className='cart-product' key={index}>
                <div onClick={() => props.history.push(`/product/${element.product_id}`)}>
                    <img className='pro-img' id='pro-cart-img' src={element.pro_img} alt={element.pro_title} />
                    <p id='cart-title' className='pro-title'>{element.pro_title}</p>
                </div>
                 <button className='cart-button' onClick={() => deleteCart(element.product_id)}>X</button>
               </div>
    })

    function getTotal(){
        let total = 0
        cart.forEach((element) => {
                total += element.price
        })
        return total
    }
    const goCheckout = () => {
        if(getTotal() == 0){
            return toast.info("You need an item in your cart before you can proceed!")
        }
        props.history.push({pathname: '/checkout', state: `${getTotal()}`})
    }

    return(
        <div className='cart-pro-display'>
            <span className='purchase-total'>
                <p className='cart-total'>Total: ${getTotal()}</p>
                <button onClick={goCheckout}>Checkout</button>
            </span>
            {cart.length === 0 ? (<p className='empty-cart'>Your Cart is empty! Go get yourself something nice!</p>) : (null)}
            {cartMap}
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(Cart)