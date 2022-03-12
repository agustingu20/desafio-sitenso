import React from 'react'
import { Form } from 'react-bootstrap'
import MovieCard from './MovieCard'

export default function SearchMovie({ starWarsMovies }) {
    return (
        <div className='searchMovie-container'>
            <div>
                <Form.Control
                    type="text"
                    id="movieSearch"
                    placeholder='Buscar'
                    className='search-form'
                />
            </div>
            <div className='searchMovie-title-container'>
                <p className='searchMovie-title'>Películas</p>
            </div>
            <hr className='hr-line' />
            <div>
                <MovieCard starWarsMovies={starWarsMovies} />
            </div>
        </div>
    )
}
