import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './cart.css'

function Cart(){
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
            alert('Removed from Cart!')
            getCart()
        }).catch(err => console.log(err))
    }

    const cartMap = cart.map((element, index) => {
        return <div className='product-display' key={index}>
                 <img className='pro-img' src={element.pro_img} alt={element.pro_title} />
                 <p>{element.pro_title}</p>
                 <button onClick={() => deleteCart(element.product_id)}>X</button>
               </div>
    })
    return(
        <div className='cart'>
            {cartMap}
        </div>
    )
}

export default Cart