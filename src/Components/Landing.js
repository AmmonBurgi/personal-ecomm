import React from 'react'
import {connect} from 'react-redux'


function Landing(props){
    return(
        <div>
            <p>{props.user.username} is logged in!</p>
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(Landing)