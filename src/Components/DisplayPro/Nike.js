import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { toast } from 'react-toastify'

function Nike(props){
const [product, setPro] = useState([])

useEffect(() => {
    const {id} = props.match.params
    axios.get(`/api/products/?id=${id}&brand=nike`)
    .then(res => {
        // console.log(res.data)
        setPro(res.data)
    }).catch(err => console.log(err))
}, [props.match.params])

const addToCart = (id) => {
    axios.post('/api/cart', {id})
    .then(() => toast.info('Added to Cart!'))
    .catch(err => console.log(err)) 
}

const navLogin = () => {
    props.history.push('/auth')
    toast.info('Login to add item to cart!')
    }

const navProduct = (id) => {
    props.history.push(`/product/${id}`)
    }

const proMap = product.map((element, index) => {
    return <div className='product' key={index}>
            <div>
                <img className='pro-img' onClick={() => navProduct(element.product_id)} src={element.pro_img} alt={element.pro_title} />
                <p className='pro-title' id='display-title'>{element.pro_title}</p>
            </div>
            {Object.keys(props.user).length !== 0 ? <button className='cart-button' onClick={() => addToCart(element.product_id)}>Add To Cart!</button> : <button  className='cart-button' onClick={navLogin}>Add To Cart!</button>}
           </div>
})
    return(
        <div id='brand-com' className='brand-display'>
            {proMap}
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(Nike)