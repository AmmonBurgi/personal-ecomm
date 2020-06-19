import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

function UnderArmour(props){
const [product, setPro] = useState([])

useEffect(() => {
    const {id} = props.match.params
    axios.get(`/api/products/?id=${id}&brand=UA`)
    .then(res => {
        // console.log(res.data)
        setPro(res.data)
    }).catch(err => console.log(err))
}, [props.match.params])

const addToCart = (id) => {
    axios.post('/api/cart', {id})
    .then(() => alert('Added to Cart!'))
    .catch(err => console.log(err)) 
}

const navLogin = () => {
    props.history.push('/auth')
    alert('Login to add item to cart!')
    }

const navProduct = (id) => {
     props.history.push(`/product/${id}`)
    }

const proMap = product.map((element, index) => {
    return <div key={index}>
           <div>
                <img onClick={() => navProduct(element.product_id)} src={element.pro_img} alt={element.pro_title} />
                <p>{element.pro_title}</p>
            </div>
            {Object.keys(props.user).length !== 0 ? <button onClick={() => addToCart(element.product_id)}>Add To Cart!</button> : <button onClick={navLogin}>Add To Cart!</button>}
           </div>
})
    return(
        <div>
            {proMap}
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(UnderArmour)