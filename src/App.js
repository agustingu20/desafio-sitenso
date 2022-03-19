import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavIcons from './components/NavIcons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchMovie from './components/SearchMovie';
import MovieInfo from './components/MovieInfo';
import { useSelector } from 'react-redux';
import Admin from './components/Admin';
import Login from './components/Login';
import Register from './components/Register';

const localToken = JSON.parse(localStorage.getItem('token'))?.token || "";

function App() {

  const [user, setUser] = useState({})
  const [starWarsMovies, setStarWarsMovies] = useState([])
  const selectedMovie = useSelector((store) => store.movie)
  const [token, setToken] = useState(localToken)

  useEffect(() => {
    const getStarWarsMovies = async () => {
      const response = await axios.get("http://api.tvmaze.com/search/shows?q=star%20wars")
      setStarWarsMovies(response.data)
    }
    getStarWarsMovies()
  }, [selectedMovie])

  useEffect(() => {
    if (token) {
      const request = async () => {
        const { data } = await axios.get('/auth', { headers: { "token": `${token}` } })
        setUser(data);
      };
      request();
    }
  }, [token])

  const logOut = () => {
    localStorage.removeItem('token');
    setUser({});
    setToken('');
    window.location.href = '/';
  }



  return (
    <div className="App">
      <BrowserRouter>
        <NavIcons logOut={logOut} token={token} user={user} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="search" element={<SearchMovie starWarsMovies={starWarsMovies} />} />
          <Route exact path="search/:movieName" element={<MovieInfo selectedMovie={selectedMovie} />} />
          {user.category && <Route exact path="/admin" element={<Admin token={token} />} />}
          <Route exact path="/login" element={<Login token={token} setToken={setToken} user={user} />} />
          <Route exact path="/register" element={<Register setToken={setToken} />} />
        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;
