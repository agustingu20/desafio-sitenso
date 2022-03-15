import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';

export default function Admin() {

    const [users, setUsers] = useState([
        { id: 1, nombre: "Agustin", apellido: "Gomez", userName: "agustingu" },
        { id: 2, nombre: "Raul", apellido: "Martinez", userName: "raulmartinez2" }
    ])

    const [input, setInput] = useState({})

    const deleteUser = (event) => {
        const usuarioFiltrado = users.filter((user) => user.id.toString() !== event.target.value)
        setUsers(usuarioFiltrado)
    }

    const handleChange = (event) => {
        const { value, name } = event.target
        const newInput = { ...input, [name]: value, id: '_' + Math.random().toString(36).substr(2, 9) }
        setInput(newInput)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("usuario")
        setUsers([...users, input])
    }

    return (
        <div className='admin-container'>
            <h4 className='text-white mb-5 mx-3 fw-bold'>Nuevo usuario</h4>
            <div className='d-flex justify-content-center mb-5'>
                <Form className='text-white mb-5 w-75' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control onChange={handleChange} name="nombre" type="text" placeholder="Ingrese nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control onChange={handleChange} name="apellido" type="text" placeholder="Ingrese apellido" />
                    </Form.Group> <Form.Group className="mb-3" controlId="formBasicUser">
                        <Form.Label>Nombre de usuario</Form.Label>
                        <Form.Control onChange={handleChange} name="userName" type="text" placeholder="Ingrese nombre de usuario" />
                    </Form.Group>
                    <Button variant="warning" type="submit">
                        Agregar usuario
                    </Button>
                </Form>
            </div>
            <div>
                <h4 className='text-white mb-5 fw-bold mx-3'>Usuarios</h4>
                <Table striped bordered hover variant='dark' responsive>
                    <thead className='text-white'>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Nombre de usuario</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    {users.map((user) => (
                        <tbody key={`usuario-${user.id}`}>
                            <tr>
                                <td className='text-white'>{user.nombre}</td>
                                <td className='text-white'>{user.apellido}</td>
                                <td className='text-white'>{user.userName}</td>
                                <td className='text-white'>
                                    <Button onClick={deleteUser} value={user.id} variant="danger" className='btn-sm'>Eliminar</Button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
}
