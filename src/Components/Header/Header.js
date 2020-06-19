import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../../redux/reducer'
import DropDown from './DropDown'
import axios from 'axios'
import './header.css'

function Header(props){

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
}, [])
    
    return(
        <div className='navbar'>
            <Link to='/'><button style={{position: 'absolute', left: '1em'}}>Home</button></Link>
            <section className='brands'>
                <div>
                    <h1>Nike</h1>
                    <DropDown sport='nike'/>
                </div>
                <div>
                    <h1>Under Armour</h1>
                    <DropDown sport='UA'/>
                </div>
                <div>
                    <h1>Adidas</h1>
                    <DropDown sport='adidas'/>
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