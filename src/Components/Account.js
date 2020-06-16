import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {getUser} from '../redux/reducer'

function Account(props){

    const logout = () => {
        axios.get('/api/logout')
        .then(() => {
            props.getUser({})
            props.history.push('/')
            alert('You are now logged out!')
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <section>
                <h1>Email:</h1>
                <p>{props.user.email}</p>
                <h1>Username:</h1>
                <p>{props.user.username}</p>
                <h1>Password:</h1>
                <p>{props.user.password}</p>
            </section>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, {getUser})(Account)