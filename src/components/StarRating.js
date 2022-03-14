import React from 'react'

export default function StarRating({ selectedMovie }) {

    const movieScore = selectedMovie[0]?.score
    const startPercentage = Math.trunc((2 - movieScore) * 100)
    const startPercentageRounded = Math.round(startPercentage)

    const StarStyles = () => {
        return {
            width: startPercentageRounded + "%"
        }
    }

    return (
        <div className='stars-position'>
            <div className='stars-gray'>
                <div className='stars-yellow' style={StarStyles()}>
                </div>
            </div>
        </div>
    )
}
