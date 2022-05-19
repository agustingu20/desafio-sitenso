// import { Button } from 'react-bootstrap'
import axios from 'axios'
import React from 'react'
import { Card } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMovie } from '../actions'

export default function MovieCard({ starWarsMovies, token }) {
    const dispatch = useDispatch()

    const click = async (event) => {
        dispatch(fetchMovie(event.target.name))
    }

    const favouriteMovie = async (e) => {
        const favouriteMovieName = e.target.value
        const favorito = await axios.post("/favouritesMovies", { name: JSON.stringify(favouriteMovieName) }, { headers: { "token": `${token}` } })
        console.log("favorito", favorito)
    }

    return (
        <div className='home-container'>
            {
                starWarsMovies.map((starWarsMovie) => (
                    <Card className='movies-card' key={`starWarsMovie-${starWarsMovie.show.id}`}  >
                        <Link className='text-decoration-none' to={`${starWarsMovie.show.name}`}>
                            <Card.Img variant="top" style={{ height: '12rem' }} src={starWarsMovie.show.image.original} name={`${starWarsMovie.show.name}`} onClick={click} />
                        </Link>
                        <Card.Body className='d-flex justify-content-between px-0'>
                            {/* <Button variant="danger" className="btn-sm h-75 mx-2">❤</Button> */}
                            <Link className='text-decoration-none' to={`${starWarsMovie.show.name}`}>
                                <Card.Title className='movies-card-title'>{starWarsMovie.show.name}</Card.Title>
                            </Link>
                            <button onClick={favouriteMovie} value={`${starWarsMovie.show.name}`}>❤</button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div >
    )
}
