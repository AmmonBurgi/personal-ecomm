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

const proMap = product.map((element, index) => {
    return <div key={index}>
            <img src={element.pro_img} />
            <p>{element.pro_title}</p>
           </div>
})
    return(
        <div>
            {proMap}
        </div>
    )
}

export default UnderArmour