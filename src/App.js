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



function App() {

  const [starWarsMovies, setStarWarsMovies] = useState([])
  const selectedMovie = useSelector((store) => store.movie)

  useEffect(() => {
    const getStarWarsMovies = async () => {
      const response = await axios.get("http://api.tvmaze.com/search/shows?q=star%20wars")
      setStarWarsMovies(response.data)
    }
    getStarWarsMovies()
  }, [selectedMovie])



  return (
    <div className="App">
      <BrowserRouter>
        <NavIcons />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="search" element={<SearchMovie starWarsMovies={starWarsMovies} />} />
          <Route exact path="search/:movieName" element={<MovieInfo selectedMovie={selectedMovie} />} />
        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;
