import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHouseChimney, faArrowLeft, faUserAstronaut } from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from 'react-router-dom'

export default function NavIcons() {

    const location = useLocation();

    const verifyingLocation = () => {
        if (location.pathname === "/") {
            document.getElementById("homeIcon").classList.add("link-activated")
        } else if (location.pathname === "/search") {
            document.getElementById("searchIcon").classList.add("link-activated")
            document.getElementById("userIcon").classList.remove("link-activated")
        } else if (location.pathname === "/admin") {
            document.getElementById("userIcon").classList.add("link-activated")
        }
    }

    useEffect(() => {
        verifyingLocation()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])

    const addActiveClassLinkHome = () => {
        document.getElementById("homeIcon").classList.add("link-activated")
        document.getElementById("searchIcon").classList.remove("link-activated")
        document.getElementById("userIcon").classList.remove("link-activated")
    }
    const addActiveClassLinkSearch = () => {
        document.getElementById("homeIcon").classList.remove("link-activated")
        document.getElementById("searchIcon").classList.add("link-activated")
        document.getElementById("userIcon").classList.remove("link-activated")
    }
    const addActiveClassLinkUser = () => {
        document.getElementById("homeIcon").classList.remove("link-activated")
        document.getElementById("searchIcon").classList.remove("link-activated")
        document.getElementById("userIcon").classList.add("link-activated")
    }

    return (
        <div className='home-icons-container'>
            <div>
                <Link to="/admin">
                    <FontAwesomeIcon
                        onClick={addActiveClassLinkUser}
                        id="userIcon"
                        className='user-icon'
                        icon={faUserAstronaut}
                    />
                </Link>
            </div>
            {(location.pathname === "/" || location.pathname === "/search")
                ?
                <div>
                    <Link to="/">
                        <FontAwesomeIcon
                            onClick={addActiveClassLinkHome}
                            id="homeIcon"
                            className='home-icon'
                            icon={faHouseChimney}
                        />
                    </Link>
                    <Link to="search">
                        <FontAwesomeIcon
                            onClick={addActiveClassLinkSearch}
                            id="searchIcon"
                            className='search-icon'
                            icon={faMagnifyingGlass}
                        />
                    </Link>
                </div>
                :
                <div>
                    <Link to="search">
                        <FontAwesomeIcon
                            className='back-icon'
                            icon={faArrowLeft}
                        />
                    </Link>
                </div>
            }
        </div >
    )
}
