import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './cart.css'
import { toast } from 'react-toastify'

function Cart(props){
    const [cart, setCart] = useState([])

    const getCart = () => {
        axios.get('/api/cart')
    .then(res => {
        setCart(res.data)
    }).catch(err => console.log(err))
    }

    useEffect(() => {
    getCart()
    }, [])

    const deleteCart = (pro_id) => {
        axios.delete(`/api/cart/?pro_id=${pro_id}`)
        .then(() => {
            toast.info('Removed from Cart!')
            getCart()
        }).catch(err => console.log(err))
    }

    const cartMap = cart.map((element, index) => {
        return <div className='product' key={index}>
                <div onClick={() => props.history.push(`/product/${element.product_id}`)}>
                    <img className='pro-img' src={element.pro_img} alt={element.pro_title} />
                    <p className='pro-title'>{element.pro_title}</p>
                </div>
                 <button className='cart-button' onClick={() => deleteCart(element.product_id)}>X</button>
               </div>
    })
    return(
        <div className='brand-display'>
            {cartMap}
        </div>
    )
}

export default Cart