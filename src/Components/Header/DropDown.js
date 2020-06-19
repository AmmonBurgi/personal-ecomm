import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function DropDown(props){
const [sports, setSports] = useState([])

useEffect(() => {
axios.get('/api/sports')
.then(res => setSports(res.data))
.catch(err => console.log(err))
}, [])

const sportsMap = sports.map((element, index) => {
    return  <Link key={index} to={`/${props.sport}/${element.sport_id}`} ><p >{element.sport_title}</p></Link>
})
    return (
        <div className='dropdown'>
            {sportsMap}
        </div>
    )
}
export default DropDown