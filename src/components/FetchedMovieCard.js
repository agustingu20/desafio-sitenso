import axios from 'axios'
import React from 'react'
import { Button, Card } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { fetchMovie } from '../actions'

export default function FetchedMovieCard({ fetchedMovies, token }) {
    const dispatch = useDispatch()

    const click = async (event) => {
        dispatch(fetchMovie(event.target.name))
    }

    const favouriteMovie = async (e) => {
        const favouriteMovieName = e.target.value
        try {
            if (token) {
                await axios.post("/favouritesMovies", { name: JSON.stringify(favouriteMovieName) }, { headers: { "token": `${token}` } })
                    .then(swal("Película añadida correctamente a favoritos", {
                        icon: "success",
                    }))
            } else {
                swal("Debe estar logueado para añadir película a favoritos", {
                    icon: "error",
                })
            }
        } catch (error) {
            swal(`${error.response.data.msg}`, {
                icon: "error",
            })
        }
    }

    return (
        <div className='home-container'>
            {
                fetchedMovies.map((fetchedMovie) => (
                    <Card className='movies-card' key={`starWarsMovie-${fetchedMovie?.show.id}`}>
                        <Link className='text-decoration-none' to={`${fetchedMovie.show.name}`}>
                            <Card.Img variant="top" style={{ height: '12rem' }} src={fetchedMovie.show.image?.original} name={`${fetchedMovie.show.name}`} onClick={click} />
                        </Link>
                        <Card.Body className='d-flex justify-content-between px-0'>
                            <Link className='text-decoration-none' to={`${fetchedMovie.show.name}`}>
                                <Card.Title className='movies-card-title'>{fetchedMovie?.show.name}</Card.Title>
                            </Link>
                            <Button variant="danger" className="btn-sm mx-1" onClick={favouriteMovie} value={`${fetchedMovie.show.name}`}>❤</Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}
