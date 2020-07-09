import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './editPro.css'
import { toast } from 'react-toastify'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

function EditPro(props){
    const [product, setProduct] = useState({}),
        [proImg, setProImg] = useState(''),
        [proTitle, setProTitle] = useState(''),
        [price, setPrice] = useState(''),
        [description, setDescription] = useState(''),
        [brand, setBrand] = useState(''),
        [sport, setSport] = useState('')

    useEffect(() => {
        const {id} = props.match.params
        axios.get(`/api/product/${id}`)
        .then(res => {
            setProduct(res.data[0])
        })
    }, [])

    const editProduct = () => {
        const {id} = props.match.params
        let img = ''
        let title = ''
        let proPrice = ''
        let proDesc = ''
        let brandId = ''
        let sportId = ''
        if(proTitle.length !== 0){
            title = proTitle
        } else {
            title = product.pro_title
        }
        if(proImg.length !== 0){
            img = proImg
        } else {
            img = product.pro_img
         }
        if(price.length !== 0){
            proPrice = price
        } else {
            proPrice = product.price
        }
        if(description.length !== 0){
            proDesc = description
        } else {
            proDesc = product.description
        }
        if(brand.length !== 0){
            brandId = brand
        } else{
            brandId = product.brand_id
        }
        if(sport.length !== 0){
            sportId = sport
        } else {
            sportId = product.sport_id
        }
        axios.put(`/api/edit/${id}`, {img, title, proPrice, proDesc, brandId, sportId})
        .then(() => {
            props.history.push('/select-edit')
            toast.info('Edit Complete!')
        }).catch(err => console.log(err))
    }

    const deleteProduct = () => {
        axios.delete(`/api/product/${product.product_id}`)
        .then(() => {
            props.history.push('/select-edit')
            toast.info('Removed Product!')
        }).catch(err => console.log(err))
    }

    return (
        <div className='editPro'>
            <FontAwesomeIcon onClick={props.history.goBack} className='back-arrow-edit' icon={faArrowLeft}></FontAwesomeIcon>
            <section className='edit-form'>
                <button onClick={deleteProduct} className='delete-button'>X</button>
                <input onChange={(e) => setProImg(e.target.value)} defaultValue={product.pro_img} placeholder='Image Address' />
                <input onChange={(e) => setProTitle(e.target.value)} defaultValue={product.pro_title} placeholder='Title' />
                <input onChange={(e) => setPrice(e.target.value)} defaultValue={product.price} placeholder='Price' />
                <input onChange={(e) => setDescription(e.target.value)} defaultValue={product.description} placeholder='Description' />
                <span className='edit-align'>
                    <form className='brand-select' onChange={(e) => setBrand(e.target.value)}>
                            <select value={brand} id='brands'>
                                <option value=''>Select Brand</option>
                                <option value='1'>Nike</option>
                                <option value='2'>Under Armour</option>
                                <option value='3'>Adidas</option>
                            </select>
                    </form>
                    <form onChange={(e) => setSport(e.target.value)}>
                            <select value={sport} id='sport'>
                                <option value=''>Select Sport</option>
                                <option value='1'>Basketball</option>
                                <option value='2'>FootBall</option>
                             </select>
                    </form>
                </span>
                <button className='confirm-button' onClick={editProduct}>Confirm</button>
            </section>
        </div>
    )
}

export default EditPro