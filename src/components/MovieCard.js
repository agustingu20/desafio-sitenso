import React from 'react'
import { Card } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMovie } from '../actions'

export default function MovieCard({ starWarsMovies, selectedMovie, to }) {

    const dispatch = useDispatch()

    const click = (event) => {
        dispatch(fetchMovie(event.target.name))
    }

    return (
        <div className='home-container'>
            {
                starWarsMovies.map((starWarsMovie) => (
                    <Card className='movies-card' key={`starWarsMovie-${starWarsMovie.show.id}`}>
                        <Link to={to}>
                            <Card.Img variant="top" style={{ height: '12rem' }} src={starWarsMovie.show.image.original} name={`${starWarsMovie.show.name}`} onClick={click} />
                            <Card.Body>
                                <Card.Title className='movies-card-title'>{starWarsMovie.show.name}</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>
                ))
            }
        </div>
    )
}
