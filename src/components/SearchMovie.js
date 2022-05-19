import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import MovieCard from './MovieCard'
import FetchedMovieCard from "./FetchedMovieCard"

export default function SearchMovie({ starWarsMovies, token }) {
    const [input, setInput] = useState("")
    const [fetchedMovies, setFetchedMovies] = useState([])

    const handleChange = (event) => {
        const value = event.target.value
        setInput(value)
    }

    const searchMovies = async () => {
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${input}`)
        setFetchedMovies(response.data)
    }



    useEffect(() => {
        searchMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input])


    return (
        <div className='searchMovie-container'>
            <div>
                <Form.Control
                    name="movieName"
                    type="text"
                    id="movieSearch"
                    placeholder='Buscar'
                    className='search-form'
                    onChange={handleChange}
                />
            </div>
            <div className='searchMovie-title-container'>
                <p className='searchMovie-title'>Películas</p>
            </div>
            <hr className='hr-line' />
            <div>
                {fetchedMovies.length === 0 && <MovieCard starWarsMovies={starWarsMovies} token={token} />}
                {fetchedMovies.length !== 0 && <FetchedMovieCard fetchedMovies={fetchedMovies} />}
            </div>
        </div>
    )
}
