import React, {useState} from 'react'
import axios from 'axios'
import './selectEdit.css'

function SelectEdit(props){
    const [products, setProducts] = useState([]),
        [search, setSearch] = useState([])

    const searchProduct = () => {
         axios.get(`/api/pro-search/?searchVal=${search}`)
        .then(res => {
            console.log(res.data)
            setProducts(res.data)
            setSearch('')
        }).catch(err => console.log(err))
    }

    const proMap = products.map((element, index) => {
        return <div className='select-product' key={index}>
                <img className='select-img' src={element.pro_img} alt={element.pro_title} />
                <p>{element.pro_title}</p>
                <button className='select-button' onClick={() => props.history.push(`/edit/${element.product_id}`)}>Edit</button>
               </div>
    })

    return (
        <div className='select-edit'>
            <span className='select-align'>
                <input className='select-input' onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Search Products!' />
                <button onClick={searchProduct}>Search</button>
            </span>
            {proMap}
        </div>
    )
}

export default SelectEdit