import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Cart(){
    const [cart, setCart] = useState([])

    useEffect(() => {
    axios.get('/api/cart')
    .then(res => {
        console.log(res)
        setCart(res.data)
    }).catch(err => console.log(err))
    }, [])

    const deleteCart = (pro_id) => {
        axios.delete(`/api/cart/?pro_id=${pro_id}`)
        .then(() => {
            alert('Removed from Cart!')
        }).catch(err => console.log(err))
    }

    const cartMap = cart.map((element, index) => {
        return <div key={index}>
                 <p>{element.pro_title}</p>
                 <button onClick={() => deleteCart(element.product_id)}>X</button>
               </div>
    })
    return(
        <div>
            {cartMap}
        </div>
    )
}

export default Cart