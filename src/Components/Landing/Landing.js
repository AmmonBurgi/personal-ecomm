import React, {useState} from 'react'
import {connect} from 'react-redux'
import SlideShow from '../SlideShow/SlideShow'
import './landing.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'



function Landing(props){
    const [searched, setSearch] = useState('')

    return(
        <div className='landing'>
            <div className='search-box'>
                <input onChange={(e) => setSearch(e.target.value)} className='search-text' type='text' placeholder='Search For Products' />
                <Link to={{ pathname: '/search', state: {searchedVal: searched}}}><FontAwesomeIcon className='search-button' icon={faSearch}></FontAwesomeIcon></Link>
            </div>
            <SlideShow />
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(Landing)