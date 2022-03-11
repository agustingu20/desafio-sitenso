import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHouseChimney } from "@fortawesome/free-solid-svg-icons"
import moviePop from "../assets/moviePopIcon.png"

export default function Home() {
    return (
        <div className='home-container'>
            <div className='home-icons-container'>
                <FontAwesomeIcon className='home-icon' icon={faHouseChimney} />
                <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
            </div>
            <div style={{ textAlign: "center" }}>
                <img src={moviePop} alt="movieLogo" />
            </div>
            <div>
                <p className='text-moviepop'>MoviePop!</p>
            </div>
        </div>
    )
}
