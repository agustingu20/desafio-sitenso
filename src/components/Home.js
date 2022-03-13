import React from 'react'
import moviePop from "../assets/moviePopIcon.png"

export default function Home() {

    return (
        <div className='home-container'>
            <div style={{ textAlign: "center" }}>
                <img src={moviePop} alt="movieLogo" />
            </div>
            <div>
                <p className='text-moviepop'>MoviePop!</p>
            </div>
        </div>
    )
}
