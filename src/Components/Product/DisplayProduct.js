import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DisplayProduct(props){
    const [product, setProduct] = useState({})

useEffect(() => {
    const {id} = props.match.params
    axios.get(`/api/product/${id}`)
    .then(res => setProduct(res.data[0]))
    .catch(err => console.log(err))
})
    return(
        <div>
            <p>{product.pro_title}</p>
        </div>
    )
}
export default DisplayProduct