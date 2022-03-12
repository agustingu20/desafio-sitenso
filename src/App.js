import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieCard from './components/MovieCard';
import NavIcons from './components/NavIcons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchMovie from './components/SearchMovie';



function App() {

  const [starWarsMovies, setStarWarsMovies] = useState([])

  useEffect(() => {
    const getStarWarsMovies = async () => {
      const response = await axios.get("http://api.tvmaze.com/search/shows?q=star%20wars")
      setStarWarsMovies(response.data)
    }
    console.log(starWarsMovies)
    getStarWarsMovies()
  }, [])



  return (
    <div className="App">
      <BrowserRouter>
        <NavIcons />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="search" element={<SearchMovie starWarsMovies={starWarsMovies} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
