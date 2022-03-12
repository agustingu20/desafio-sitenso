import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHouseChimney } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

export default function NavIcons() {
    const addActiveClassLinkHome = () => {
        document.getElementById("homeIcon").classList.add("link-activated")
        document.getElementById("searchIcon").classList.remove("link-activated")
    }
    const addActiveClassLinkSearch = () => {
        document.getElementById("homeIcon").classList.remove("link-activated")
        document.getElementById("searchIcon").classList.add("link-activated")
    }

    return (
        <div className='home-icons-container'>
            <Link to="/">
                <FontAwesomeIcon onClick={addActiveClassLinkHome} id="homeIcon" className='home-icon link-activated' icon={faHouseChimney} />
            </Link>
            <Link to="search">
                <FontAwesomeIcon onClick={addActiveClassLinkSearch} id="searchIcon" className='search-icon' icon={faMagnifyingGlass} />
            </Link>
        </div >
    )
}
