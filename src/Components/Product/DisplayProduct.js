import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './product.css'

function DisplayProduct(props){
    const [product, setProduct] = useState({})

useEffect(() => {
    const {id} = props.match.params
    axios.get(`/api/product/${id}`)
    .then(res => setProduct(res.data[0]))
    .catch(err => console.log(err))
})
    return(
        <div className='product-view'>
            <section className='product-display'>
                <img className='product-img' src={product.pro_img} alt={product.pro_title} />
                <p className='product-title'>{product.pro_title}</p>
                <p className='product-description'>{product.description}</p>
                <p className='product-price'>${product.price}</p>
            </section>
        </div>
    )
}
export default DisplayProduct