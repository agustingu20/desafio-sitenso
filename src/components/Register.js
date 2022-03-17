import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function Register() {

    const [newUser, setNewUser] = useState({})

    const handleChange = (event) => {
        const { value, name } = event.target
        const newInput = { ...newUser, [name]: value }
        setNewUser(newInput)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className='login-container'>
            <Form className='text-white w-75 mx-auto' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        minLength={2}
                        maxLength={40}
                        name="name"
                        type="text"
                        placeholder="Ingrese nombre"
                        required
                    />
                </Form.Group><Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        minLength={2}
                        maxLength={40}
                        name="lastName"
                        type="text"
                        placeholder="Ingrese apellido"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        minLength={3}
                        maxLength={50}
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        minLength={6}
                        maxLength={40}
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Ingresar
                </Button>
            </Form>
        </div>
    )
}
