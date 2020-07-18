import React, {useState} from 'react'
import axios from 'axios'
import {getUser} from '../../redux/reducer'
import {connect} from 'react-redux'
import './auth.css'
import { toast } from 'react-toastify'

function Auth(props){
    const [email, setEmail] = useState(''),
        [username, setUsername] = useState(''),
        [password, setPassword] = useState(''),
        [toggle, setToggle] = useState(false),
        [admin, setAdmin] = useState(false),
        [adminPass, setAdminPass] = useState('')

const login = () => {
    axios.post('/api/login', {email, password})
    .then(res => {
        props.getUser(res.data)
        props.history.push('/')
        toast.info(`Welcome!`)
    }).catch(err => {
        console.log(err)
        toast.error(err.response.data)
    })
}

const register = () => {
    if(email.length === 0){
        return toast.info('Email is required!')
    }
    if(username.length === 0){
        return toast.info('Username is required!')
    }
    if(password.length === 0){
        return toast.info('Password is required!')
    } else if (password.length < 5){
        return toast.info('Password must be at least 5 characters long!')
    }
    axios.post('/api/register', {email, username, password, adminPass})
    .then(res => {
        props.getUser(res.data)
        props.history.push('/')
        toast.info('Account Created!')
    }).catch(err => toast.error(err.response.data))
}

    return (
        <div className='auth'>
            {toggle === false ? 
            (
            <section className='form'>
                <input value={email} className='email-input' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <input value={password} placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} /> 
                <button className='form-button' onClick={login}>Login</button>
                <span>Need an account?<p onClick={() => setToggle(!toggle)}>Register</p></span>
            </section>
            ) : (
            <section className='form'>
                <div className='check-text'><span>Admin:</span><input onClick={() => setAdmin(!admin)} type='checkbox' value={admin} /></div>
                {admin === true ? (<input placeholder='Admin Password' type='password' value={adminPass} onChange={(e) => setAdminPass(e.target.value)} />) : (null)} 
                <input value={email} className='email-input' placeholder='Email' onChange={(e) => setEmail(e.target.value)} /> 
                <input value={username} className='username-input' placeholder='Username' onChange={(e) => setUsername(e.target.value)} /> 
                <input value={password} className='password-input' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} /> 
                <button className='form-button' onClick={register}>Register</button>
                <span>Already have an account?<p onClick={() => {
                setAdmin(false)
                setToggle(!toggle)}}>Login</p></span>
            </section>
            )}
            {admin === true ? (<p className='admin-text'>Admin password is 'openSaysMe'. Being an admin allows the user to add and edit products.</p>) : (null)}
        </div>
    )
}

export default connect(null, {getUser})(Auth)