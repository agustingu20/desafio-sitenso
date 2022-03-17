import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from "axios"
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

export default function Register({ setToken }) {
    const [validated, setValidated] = useState(false);

    const [newUser, setNewUser] = useState({})

    const navigate = useNavigate()

    const handleChange = (event) => {
        const { value, name } = event.target
        const newInput = { ...newUser, [name]: value }
        setNewUser(newInput)
    }

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault()
        setValidated(true);
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        const { data } = await axios.post("/auth/register", newUser)
        console.log("handleSubmit ~ data", data)
        localStorage.setItem("token", JSON.stringify(data));
        setToken(data.token);
        swal({
            title: "Usuario registrado correctamente!",
            icon: "success",
        }).then(() => {
            form.reset();
            navigate("/")
        });
    }


    return (
        <div className='login-container'>
            <Form className='text-white w-75 mx-auto' noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
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
                </Form.Group><Form.Group className="mb-3" controlId="formBasicLastName">
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
