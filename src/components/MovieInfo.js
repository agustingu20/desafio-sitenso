import React, { useState } from 'react'
import { Card } from 'react-bootstrap'


export default function MovieInfo({ selectedMovie }) {

    return (
        <div className='movieInfo-container'>
            <div>
                <Card className="movie-info-card">
                    <Card.Img variant="top" style={{ height: '25.5rem' }} src={selectedMovie[0]?.show?.image?.original} />
                    <Card.Body className="p-0">
                        <Card.Title className='movie-info-title'>
                            <b>Título</b>
                        </Card.Title>
                        <Card.Title className='movie-info-properties'>
                            <b>Lenguaje:</b>
                            <br></br>
                            <b>Géneros:</b>
                            <br></br>
                            <b>Fecha de estreno:</b>
                        </Card.Title>
                        <Card.Title className='movie-info-title'>
                            <b>Sinopsis</b>
                        </Card.Title>
                        <Card.Text className='movie-info-summary'>
                            <b>Under the Dome</b>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
