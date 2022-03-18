import { Button } from 'react-bootstrap'
import React from 'react'
import { Card } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMovie } from '../actions'

export default function MovieCard({ starWarsMovies }) {
    const dispatch = useDispatch()

    const click = async (event) => {
        dispatch(fetchMovie(event.target.name))
    }

    // const favClick = async (event) => {
    //     const { value, name } = event.target
    //     const favsFilter = favs.filter(fav => fav !== null)
    //     setFavs([...favsFilter, { [name]: value }])
    // }

    return (
        <div className='home-container'>
            {
                starWarsMovies.map((starWarsMovie) => (
                    <Card className='movies-card' key={`starWarsMovie-${starWarsMovie.show.id}`}>
                        <Link className='text-decoration-none' to={`${starWarsMovie.show.name}`}>
                            <Card.Img variant="top" style={{ height: '12rem' }} src={starWarsMovie.show.image.original} name={`${starWarsMovie.show.name}`} onClick={click} />
                        </Link>
                        <Card.Body className='d-flex justify-content-between px-0'>
                            <Button variant="danger" className="btn-sm h-75 mx-2">❤</Button>
                            <Link className='text-decoration-none' to={`${starWarsMovie.show.name}`}>
                                <Card.Title className='movies-card-title'>{starWarsMovie.show.name}</Card.Title>
                            </Link>
                        </Card.Body>
                    </Card>
                ))
            }
        </div >
    )
}
