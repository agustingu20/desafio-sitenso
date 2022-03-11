import React from 'react'
import { Card } from "react-bootstrap"
import pizarra from "../assets/pizarra.png"

export default function MovieCard() {
    return (
        <div className='home-container'>
            <Card style={{ width: '11rem' }}>
                <Card.Img variant="top" src={pizarra} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}
