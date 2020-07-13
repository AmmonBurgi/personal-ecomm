import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import './searchedPro.css'
import axios from 'axios'
import {toast} from 'react-toastify'
import {connect} from 'react-redux'

function SearchedPro(props){
    const [searched, setSearch] = useState(''),
        [mounted, setMount] = useState(false),
        [searchedProducts, setSearchedPro] = useState([])
        
    const getSearchedPro = () => {
        axios.get(`/api/pro-search/?searchVal=${searched}`)
        .then(res => {
            setSearchedPro(res.data)
            
            setSearch('')
        }).catch(err => console.log(err))
    }

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setMount(true)
        }, 100);
        return () => clearTimeout(timer)
    }, [])

    const proMap = searchedProducts.map((element, index) => {
        return <div className='search-product' key={index}>
                <div onClick={() => navProduct(element.product_id)}>
                    <img className='search-pro-img'  src={element.pro_img}  alt={element.pro_title}/>
                    <p className='search-pro-title'>{element.pro_title}</p>
                </div>
                {Object.keys(props.user).length !== 0 ? <button className='search-cart-button' onClick={() => addToCart(element.product_id)}>Add To Cart!</button> : <button className='search-cart-button' onClick={navLogin}>Add To Cart!</button>}
               </div>
    })

    return (
        <div>
            <div className={mounted === true ? ('pro-search-box') : ('pro-mount')}>
                <input onChange={(e) => setSearch(e.target.value)} value={searched} className={mounted === true ? ('pro-search-text') : ('no-text')} type='text' placeholder='Search For Products' />
                <FontAwesomeIcon onClick={getSearchedPro} className='pro-search-button' icon={faSearch}></FontAwesomeIcon>
            </div>
            {proMap}
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(SearchedPro)