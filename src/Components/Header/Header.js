import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../../redux/reducer'
import axios from 'axios'
import './header.css'

function Header(props){
    const [sports, setSports] = useState([])

    const session = () => {
        axios.get('/session')
        .then((res) => {
            props.getUser(res.data)
        }).catch(err => console.log(err))
    }

    const getSports = () => {
        axios.get('/api/sports')
        .then(res => setSports(res.data))
        .catch(err => console.log(err))
    }

useEffect(() => {
if(Object.keys(props.user).length === 0){
    session()
}
getSports()
}, [])

const sportMap = sports.map((element, index) => {
return <p key={index}>{element.product_type}</p>
})
    
    return(
        <div className='navbar'>
            <Link to='/'><button style={{position: 'absolute', left: '1em'}}>Home</button></Link>
            <section className='brands'>
                <div>
                    <h1>Nike</h1>
                    <div style={{position: 'absolute'}}>
                        {sportMap}
                    </div>
                </div>
                <div>
                    <h1>Under Armour</h1>
                    <div style={{position: 'absolute'}}>
                        {sportMap}
                    </div>
                </div>
                <div>
                    <h1>Adidas</h1>
                    <div style={{position: 'absolute'}}>
                        {sportMap}
                    </div>
                </div>
            </section>
            <section className='user-nav'>
                {Object.keys(props.user).length !== 0 ? <Link to='/cart'><button>Cart</button></Link> : <button onClick={() => alert('Please login to access the Cart!')}>Cart</button>}
                {Object.keys(props.user).length === 0 ? <Link to='/auth'><button>Account</button></Link> : <Link to='/account'><button>Account</button></Link>}
            </section>
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, {getUser})(Header)