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
        console.log(res)
        props.getUser(res.data)
        props.history.push('/')
    }).catch(err => {
        console.log(err)
        toast.error(err.response.data)
    })
}

const register = () => {
    axios.post('/api/register', {email, username, password, adminPass})
    .then(res => {
        props.getUser(res.data)
        props.history.push('/')
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
                {admin === true ? (<input placeholder='Admin Password' value={adminPass} onChange={(e) => setAdminPass(e.target.value)} />) : (null)} 
                <input value={email} className='email-input' placeholder='Email' onChange={(e) => setEmail(e.target.value)} /> 
                <input value={username} className='username-input' placeholder='Username' onChange={(e) => setUsername(e.target.value)} /> 
                <input value={password} className='password-input' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} /> 
                <button className='form-button' onClick={register}>Register</button>
                <span>Already have an account?<p onClick={() => {
                setAdmin(false)
                setToggle(!toggle)}}>Login</p></span>
            </section>
            )}
            {admin === true ? (<p className='admin-text'>Admin password is 'adminPassCode'. Being an admin allows the user to add products.</p>) : (null)}
        </div>
    )
}

export default connect(null, {getUser})(Auth)