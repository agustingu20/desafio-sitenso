import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHouseChimney } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
    return (
        <div>
            <FontAwesomeIcon style={{ color: "white", marginRight: "15px", fontSize: "33px" }} icon={faHouseChimney} />
            <FontAwesomeIcon style={{ color: "white", fontSize: "33px" }} icon={faMagnifyingGlass} />
        </div>
    )
}
