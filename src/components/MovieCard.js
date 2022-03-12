import React from 'react'
import { Card } from "react-bootstrap"

export default function MovieCard({ starWarsMovies }) {
    return (
        <div className='home-container'>
            {starWarsMovies.map((starWarsMovie) => (
                <Card className='movies-card'>
                    <Card.Img variant="top" style={{ height: '12rem' }} src={starWarsMovie.show.image.original} />
                    <Card.Body>
                        <Card.Title className='movies-card-title'>{starWarsMovie.show.name}</Card.Title>
                    </Card.Body>
                </Card>
            ))}

        </div>
    )
}
