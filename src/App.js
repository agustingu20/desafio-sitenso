import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieCard from './components/MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHouseChimney } from "@fortawesome/free-solid-svg-icons"


function App() {
  return (
    <div className="App">
      <div className='home-icons-container'>
        <FontAwesomeIcon className='home-icon' icon={faHouseChimney} />
        <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<MovieCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
