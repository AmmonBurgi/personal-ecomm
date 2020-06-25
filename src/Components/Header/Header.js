import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../../redux/reducer'
import axios from 'axios'
import {toast} from 'react-toastify'
import './header.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome} from '@fortawesome/free-solid-svg-icons'

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
    return  <Link key={index} to={`/nike/${element.sport_id}`} ><p className='nav'>{element.sport_title}</p></Link>
})
const UAMap = sports.map((element, index) => {
    return  <Link key={index} to={`/UA/${element.sport_id}`} ><p className='nav'>{element.sport_title}</p></Link>
})
const adidasMap = sports.map((element, index) => {
    return  <Link key={index} to={`/adidas/${element.sport_id}`} ><p className='nav'>{element.sport_title}</p></Link>
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
                {Object.keys(props.user).length !== 0 ? <Link to='/cart'><button>Cart</button></Link> : <Link to='/auth'><button onClick={() => toast.error('Please login to access the Cart!')}>Cart</button></Link>}
                {Object.keys(props.user).length === 0 ? <Link to='/auth'><button>Account</button></Link> : <Link to='/account'><button>Account</button></Link>}
            </section>
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, {getUser})(Header)