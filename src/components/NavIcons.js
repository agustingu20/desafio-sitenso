import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHouseChimney } from "@fortawesome/free-solid-svg-icons"

export default function NavIcons() {
    return (
        <div className='home-icons-container'>
            <FontAwesomeIcon className='home-icon' icon={faHouseChimney} />
            <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
        </div>
    )
}
