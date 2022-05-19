import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHouseChimney, faArrowLeft, faUserAstronaut } from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap';

export default function NavIcons({ logOut, token, user }) {

    const location = useLocation();

    return (
        <div className='home-icons-container'>
            <div>
                {!token && <Link
                    to={"/login"}
                >
                    <FontAwesomeIcon
                        id="userIcon"
                        className={location.pathname === "/login" || location.pathname === "/admin" ? "link-activated user-icon" : "user-icon"}
                        icon={faUserAstronaut}
                    />
                </Link>}
                {user.category === "admin" && <Link to={"/admin"} className="text-decoration-none text-white ms-4">Acceso admin</Link >}
                {token && <Link to={"/favourites"} className="text-decoration-none text-white ms-3">Películas favoritas</Link >}
                {token && <Link
                    to={"/"}
                >
                    <Button onClick={logOut} variant="danger" className='btn-sm mx-4 my-1'>Cerrar sesión</Button>
                </Link>}
            </div>
            {(location.pathname === "/" || location.pathname === "/search")
                ?
                <div className='home-search-wrapper'>
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
