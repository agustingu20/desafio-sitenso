import React from 'react'
import { Card } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMovie } from '../actions'

export default function MovieCard({ fetchedMovies }) {

    const dispatch = useDispatch()

    const click = async (event) => {
        dispatch(fetchMovie(event.target.name))
    }

    return (
        <div className='home-container'>
            {fetchedMovies.map((fetchedMovie) => (
                <Card className='movies-card' key={`starWarsMovie-${fetchedMovie?.show.id}`}>
                    <Link className='text-decoration-none' to={`${fetchedMovie.show.name}`}>
                        <Card.Img variant="top" style={{ height: '12rem' }} src={fetchedMovie.show.image?.original} name={`${fetchedMovie.show.name}`} onClick={click} />
                        <Card.Body>
                            <Card.Title className='movies-card-title'>{fetchedMovie?.show.name}</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
            ))}
        </div>
    )
}
