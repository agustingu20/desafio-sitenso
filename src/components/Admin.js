import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import axios from "axios"
import swal from 'sweetalert';

export default function Admin() {

    const [users, setUsers] = useState([])

    const getUsuarios = async () => {
        const response = await axios.get("/usuarios")
        setUsers(response.data);
    };

    useEffect(() => {
        if (!users.length) {
            getUsuarios();
        }
    }, [users]);

    const deleteUser = async (event) => {
        const userId = event.target.value;
        console.log("deleteUser ~ userId", userId)
        if (users[0].category !== "admin") {
            await axios.delete(`/usuarios/${userId}`)
            swal("El usuario fue eliminado!", {
                icon: "success",
            });
        } else {
            swal("El usuario admin no fue eliminado!", {
                icon: "error",
            });
        }
        getUsuarios()
    }

    return (
        <div className='admin-container'>
            <div>
                <h4 className='text-white mb-5 fw-bold mx-3'>Usuarios</h4>
                <Table striped bordered hover variant='dark' responsive>
                    <thead className='text-white'>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    {users.map((user) => (
                        <tbody key={`usuario-${user._id}`}>
                            <tr>
                                <td className='text-white'>{user.name}</td>
                                <td className='text-white'>{user.lastName}</td>
                                <td className='text-white'>{user.email}</td>
                                <td className='text-white'>
                                    <Button onClick={deleteUser} value={user._id} variant="danger" className='btn-sm'>Eliminar</Button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
}
