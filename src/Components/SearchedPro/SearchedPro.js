import React, {useState, useEffect} from 'react'
import axios from 'axios'

function SearchedPro(props){
    const [products, setPro] = useState([])

    const getProducts = () => {
        axios.get('/api/pro-search')
    }
    
    return (
        <div style={{color: 'white'}}>
            Searched Component
        </div>
    )
}

export default SearchedPro