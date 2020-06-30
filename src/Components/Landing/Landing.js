import React from 'react'
import {connect} from 'react-redux'
import SlideShow from '../SlideShow/SlideShow'
import './landing.css'


function Landing(props){
    return(
        <div className='landing'>
            {/* <p>{props.user.username} is logged in!</p> */}
            <SlideShow />
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(Landing)