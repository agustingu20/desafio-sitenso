import axios from 'axios'
import React from 'react'
import { Button, Card } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMovie } from '../actions'
import swal from 'sweetalert';

export default function MovieCard({ starWarsMovies, token }) {
    const dispatch = useDispatch()

    const click = async (event) => {
        dispatch(fetchMovie(event.target.name))
    }

    const favouriteMovie = async (e) => {
        const favouriteMovieName = e.target.value
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
                            <Link className='text-decoration-none' to={`${starWarsMovie.show.name}`}>
                                <Card.Title className='movies-card-title'>{starWarsMovie.show.name}</Card.Title>
                            </Link>
                            <Button variant="danger" className="btn-sm mx-1" onClick={favouriteMovie} value={`${starWarsMovie.show.name}`}>❤</Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div >
    )
}
