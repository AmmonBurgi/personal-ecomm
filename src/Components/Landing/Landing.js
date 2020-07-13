import React from 'react'
import {connect} from 'react-redux'
import SlideShow from '../SlideShow/SlideShow'
import './landing.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function Landing(props){

    return(
        <div className='landing'>
            <div className='search-box'>
                <Link to='/search'><FontAwesomeIcon className='search-button' icon={faSearch}></FontAwesomeIcon></Link>
            </div>
            <SlideShow />
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(Landing)