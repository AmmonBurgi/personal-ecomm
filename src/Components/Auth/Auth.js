import React, {useState} from 'react'
import axios from 'axios'
import {getUser} from '../../redux/reducer'
import {connect} from 'react-redux'

function Auth(props){
    const [email, setEmail] = useState(''),
        [username, setUsername] = useState(''),
        [password, setPassword] = useState(''),
        [toggle, setToggle] = useState(false)

const login = () => {
    axios.post('/api/login', {email, password})
    .then(res => {
        props.getUser(res.data)
        props.history.push('/')
    }).catch(err => console.log(err))
}

const register = () => {
    axios.post('/api/register', {email, username, password})
    .then(res => {
        props.getUser(res.data)
        props.history.push('/')
    }).catch(err => console.log(err))
}

    return (
        <div>
            {toggle === false ? 
            (
            <section>
                <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} /> 
                <input placeholder='Password' onChange={(e) => setPassword(e.target.value)} /> 
                <button onClick={login}>Login</button>
                <span>Need an account?<p onClick={() => setToggle(!toggle)}>Register</p></span>
            </section>
            ) : (
            <section>
                <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} /> 
                <input placeholder='Username' onChange={(e) => setUsername(e.target.value)} /> 
                <input placeholder='Password' onChange={(e) => setPassword(e.target.value)} /> 
                <button onClick={register}>Register</button>
                <span>Already have an account?<p onClick={() => setToggle(!toggle)}>Login</p></span>
            </section>
            )}
        </div>
    )
}

export default connect(null, {getUser})(Auth)