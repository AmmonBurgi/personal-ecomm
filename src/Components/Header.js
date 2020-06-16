import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const NavBar = styled('header')`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 10vh;
border-bottom: 1px solid black;
`

function Header(props){
    
    return(
        <NavBar>
        <Link to='/'><button>Home</button></Link>
        {Object.keys(props.user).length === 0 ? <Link to='/auth'><button>Account</button></Link> : <Link to='/account'><button>Account</button></Link>}
        </NavBar>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(Header)