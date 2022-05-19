import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import axios from "axios"
import swal from 'sweetalert';

export default function FavouritesMovies({ token }) {

    const [favouritesMovies, setFavouritesMovies] = useState([])

    const getFavouritesMovies = async () => {
        const response = await axios.get("/favouritesMovies", { headers: { "token": `${token}` } });
        setFavouritesMovies(response.data);
    };

    useEffect(() => {
        if (!favouritesMovies.length) {
            getFavouritesMovies();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [favouritesMovies]);

    const deleteFavouriteMovie = async (event) => {
        const favouritesMoviesId = event.target.value;
        await axios.delete(`/favouritesMovies/${favouritesMoviesId}`, { headers: { "token": `${token}` } })
        swal("El favorito fue eliminado!", {
            icon: "success",
        });
        getFavouritesMovies()
    }

    return (
        <div className='admin-container'>
            <div>
                <h4 className='text-white mb-5 fw-bold mx-3'>Favoritos</h4>
                <Table striped bordered hover variant='dark' responsive>
                    <thead className='text-white'>
                        <tr>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    {favouritesMovies.map((favouriteMovie) => (
                        <tbody key={`usuario-${favouriteMovie._id}`}>
                            <tr>
                                <td className='text-white'>{favouriteMovie.name}</td>
                                <td className='text-white'>
                                    {favouriteMovie && <Button onClick={deleteFavouriteMovie} value={favouriteMovie._id} variant="danger" className='btn-sm'>Eliminar</Button>}
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
}