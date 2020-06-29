import React, {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

function AddProduct(){
    const [proTitle, setProTitle] = useState(''),
        [description, setDes] = useState(''),
        [price, setPrice] = useState(''),
        [proImg, setProImg] = useState(''),
        [brand, setBrand] = useState(''),
        [sport, setSport] = useState('')

    const addPro = () => {
        if(proTitle.length === 0){
            return toast.info('Product needs a Title!')
        } else if(description.length === 0){
            return toast.info('Product needs a Description!')
        } else if(price.length === 0){
            return toast.info('Product needs a price! Insert 0 if free!')
        } else if(proImg.length === 0){
            return toast.info('Product needs an Image!')
        } else if(brand.length === 0){
            return toast.info('Product needs a brand!')
        } else if(sport.length === 0){
            return toast.info('Product needs a sport!')
        } 
        axios.post('/api/add-product', {proTitle, description, price, proImg, brand, sport})
        .then(() => {
            toast.info('Product has been added!')
        }).catch(err => {
            console.log(err)
            toast.error(err.response.data)})
    }

    return (
        <div style={{marginTop: '200px'}}>
            <input placeholder='Title' value={proTitle} onChange={(e) => setProTitle(e.target.value)} />
            <input placeholder='Description' value={description} onChange={(e) => setDes(e.target.value)} />
            <input placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
            <input placeholder='Image Address' value={proImg} onChange={(e) => setProImg(e.target.value)} />
            <form onChange={(e) => setBrand(e.target.value)}>
                <label htmlFor='brands'>Brand: </label>
                    <select id='brands'>
                        <option value=''>Select Brand</option>
                        <option value='1'>Nike</option>
                        <option value='2'>Under Armour</option>
                        <option value='3'>Adidas</option>
                    </select>
            </form>
            <form onChange={(e) => setSport(e.target.value)}>
                <label htmlFor='sport'>Sport: </label>
                    <select id='sport'>
                        <option value=''>Select Sport</option>
                        <option value='1'>Basketball</option>
                        <option value='2'>FootBall</option>
                    </select>
            </form>
            <button onClick={addPro}>Add Product!</button>
        </div>
    )
}
export default AddProduct