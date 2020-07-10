import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {getUser} from '../../redux/reducer'
import {toast} from 'react-toastify'
import './account.css'

function Account(props){

    const logout = () => {
        axios.get('/api/logout')
        .then(() => {
            props.getUser({})
            props.history.push('/')
            toast.info('You are now logged out!')
        }).catch(err => console.log(err))
    }

    return (
        <div className='account'>
            <div className='form'>
                <section className='user-info'>
                    <h1>Email:</h1>
                    <p>{props.user.email}</p>
                    <h1>Username:</h1>
                    <p>{props.user.username}</p>
                </section>
                <div>
                {props.user.admin === true ? (<button id='account-button' onClick={() => props.history.push('/select-edit')} >Edit Products</button>):(null)}
                {props.user.admin === true ? (<button id='account-button' onClick={() => props.history.push('/add-product')} >Add Products</button>) : (null)}
                <button id='account-button' onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, {getUser})(Account)