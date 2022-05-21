import React from 'react'
import { Card } from 'react-bootstrap'
import StarRating from './StarRating'


export default function MovieInfo({ selectedMovie }) {
    return (
        <div className='movieInfo-container'>
            <div>
                <Card className="movie-info-card">
                    <Card.Img variant="top" style={{ height: '25.5rem' }} src={selectedMovie[0]?.show?.image?.original} />
                    <StarRating selectedMovie={selectedMovie} />
                    <Card.Body className="p-0">
                        <Card.Title className='movie-info-title'>
                            <b>{`${selectedMovie[0]?.show?.name}`}</b>
                        </Card.Title>
                        <Card.Title className='movie-info-properties'>
                            <b>Lenguaje:</b> {`${selectedMovie[0]?.show?.language}`}
                            <br></br>
                            <b>Géneros:</b> {`${selectedMovie[0]?.show?.genres}`}
                            <br></br>
                            <b>Fecha de estreno:</b> {`${selectedMovie[0]?.show?.premiered}`}
                        </Card.Title>
                        <Card.Title className='movie-info-title'>
                            <b>Sinopsis</b>
                        </Card.Title>
                        <Card.Text className='movie-info-summary'>
                            {`${selectedMovie[0]?.show?.summary?.replace(/<[^>]+>/g, "")}`}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
