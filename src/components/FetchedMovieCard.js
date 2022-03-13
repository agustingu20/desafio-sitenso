import React from 'react'
import { Card } from "react-bootstrap"

export default function MovieCard({ fetchedMovies }) {
    return (
        <div className='home-container'>
            {fetchedMovies.map((fetchedMovie) => (
                <Card className='movies-card' key={`starWarsMovie-${fetchedMovie?.show.id}`}>
                    <Card.Img variant="top" style={{ height: '12rem' }} src={fetchedMovie.show.image?.original} />
                    <Card.Body>
                        <Card.Title className='movies-card-title'>{fetchedMovie?.show.name}</Card.Title>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}
