import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()

    const [input, setInput] = useState({})

    const handleChange = (event) => {
        const { value, name } = event.target
        const newInput = { ...input, [name]: value }
        setInput(newInput)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (input.email === "admin@admin.com" && input.password === "admin@1234") {
            navigate("/admin")
        } else {
            alert("Ingrese un email y contraseña válidos")
        }
    }


    return (
        <div className='login-container'>
            <Form className='text-white w-75 mx-auto' onSubmit={handleSubmit}>
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
                        minLength={3}
                        maxLength={50}
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLink">
                    <Form.Text>
                        <Link className='register-link' to="/register">¿No estás registrado? Registrate</Link>
                    </Form.Text>
                </Form.Group>
                <Button variant="warning" type="submit">
                    Ingresar
                </Button>
            </Form>
        </div>
    )
}
