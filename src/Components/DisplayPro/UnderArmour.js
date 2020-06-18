import React, {useState, useEffect} from 'react'
import axios from 'axios'

function UnderArmour(props){
const [product, setPro] = useState([])

useEffect(() => {
    const {id} = props.match.params
    axios.get(`/api/product/?id=${id}&brand=UA`)
    .then(res => {
        console.log(res.data)
        setPro(res.data)
    }).catch(err => console.log(err))
}, [props.match.params])

const addToCart = (id) => {
    axios.post('/api/cart', {id})
    .then(() => alert('Added to Cart!'))
    .catch(err => console.log(err)) 
}


const proMap = product.map((element, index) => {
    return <div key={index}>
           <div>
                <img src={element.pro_img} alt={element.pro_title} />
                <p>{element.pro_title}</p>
            </div>
            <button onClick={() => addToCart(element.product_id)}>Add Cart!</button>
           </div>
})
    return(
        <div>
            {proMap}
        </div>
    )
}

export default UnderArmour