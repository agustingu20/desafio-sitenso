import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHouseChimney, faArrowLeft, faArrowLeftLong, faUserAstronaut } from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from 'react-router-dom'

export default function NavIcons({ logOut, token }) {

    const location = useLocation();

    return (
        <div className='home-icons-container'>
            <div>
                <Link
                    to={location.pathname !== "/admin" ? "/login" : "/admin"}
                >
                    <FontAwesomeIcon
                        id="userIcon"
                        className={location.pathname === "/login" || location.pathname === "/admin" ? "link-activated user-icon" : "user-icon"}
                        icon={faUserAstronaut}
                    />
                </Link>
                {token && <Link
                    to={"/"}
                >
                    <FontAwesomeIcon
                        id="logOutIcon"
                        className="user-icon"
                        icon={faArrowLeftLong}
                        onClick={logOut}
                    />
                </Link>}
            </div>
            {(location.pathname === "/" || location.pathname === "/search")
                ?
                <div>
                    <Link to="/">
                        <FontAwesomeIcon
                            id="homeIcon"
                            className={location.pathname === "/" ? "link-activated home-icon" : "home-icon"}
                            icon={faHouseChimney}
                        />
                    </Link>
                    <Link to="search">
                        <FontAwesomeIcon
                            id="searchIcon"
                            className={location.pathname === "/search" ? "link-activated search-icon" : "search-icon"}
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
