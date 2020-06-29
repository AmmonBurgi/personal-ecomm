import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../../redux/reducer'
import axios from 'axios'
import {toast} from 'react-toastify'
import './header.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

function Header(props){
    const [sports, setSports] = useState([])

    const session = () => {
        axios.get('/session')
        .then((res) => {
            props.getUser(res.data)
        }).catch(err => console.log(err))
    }

useEffect(() => {
if(Object.keys(props.user).length === 0){
    session()
}
axios.get('/api/sports')
.then(res => setSports(res.data))
.catch(err => console.log(err))
}, [])

const nikeMap = sports.map((element, index) => {
    return  <Link className='link' key={index} to={`/nike/${element.sport_id}`} ><p className='nav'>{element.sport_title}</p></Link>
})
const UAMap = sports.map((element, index) => {
    return  <Link className='link' key={index} to={`/UA/${element.sport_id}`} ><p className='nav'>{element.sport_title}</p></Link>
})
const adidasMap = sports.map((element, index) => {
    return  <Link className='link' key={index} to={`/adidas/${element.sport_id}`} ><p className='nav'>{element.sport_title}</p></Link>
})

    return(
        <div className='navbar'>
            <Link to='/'><FontAwesomeIcon className='home-icon' icon={faHome}></FontAwesomeIcon></Link>
            <section className='brands'>
                <div 
                className='title'
                >
                    <h1>Nike</h1>
                    {nikeMap}
                </div>
                <div 
                className='title'
                >
                    <h1>Under Armour</h1>
                    {UAMap}
                </div>
                <div 
                className='title'
                >
                    <h1>Adidas</h1>
                    {adidasMap}
                </div>
            </section>
            <section className='user-nav'>
                {Object.keys(props.user).length !== 0 ? <Link to='/cart'><FontAwesomeIcon className='shopping-cart' icon={faShoppingCart}>Cart</FontAwesomeIcon></Link> : <Link to='/auth'><FontAwesomeIcon className='shopping-cart' icon={faShoppingCart} onClick={() => toast.info('Please login to access the Cart!')}>Cart</FontAwesomeIcon></Link>}
                {Object.keys(props.user).length === 0 ? <Link to='/auth'><FontAwesomeIcon className='user-circle' icon={faUserCircle}>Account</FontAwesomeIcon></Link> : <Link to='/account'><FontAwesomeIcon className='user-circle' icon={faUserCircle}>Account</FontAwesomeIcon></Link>}
            </section>
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, {getUser})(Header)