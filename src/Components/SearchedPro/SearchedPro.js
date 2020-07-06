import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import './searchedPro.css'

function SearchedPro(){
    const [searched, setSearch] = useState(''),
        [mounted, setMount] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setMount(true)
        }, 100);
        return () => clearTimeout(timer)
    }, [])

    return (
        <div style={{color: 'white'}}>
            <div className={mounted === true ? ('pro-search-box') : ('pro-mount')}>
                <input onChange={(e) => setSearch(e.target.value)} value={searched} className={mounted === true ? ('pro-search-text') : ('no-text')} type='text' placeholder='Search For Products' />
                <FontAwesomeIcon className='pro-search-button' icon={faSearch}></FontAwesomeIcon>
            </div>
        </div>
    )
}
export default SearchedPro