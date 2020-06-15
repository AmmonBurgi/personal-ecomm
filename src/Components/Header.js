import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const NavBar = styled('header')`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 10vh;
border-bottom: 1px solid black;
`

function Header(){
    return(
        <NavBar>
            <Link><button>Login</button></Link>
        </NavBar>
    )
}
export default Header