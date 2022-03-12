import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieCard from './components/MovieCard';
import NavIcons from './components/NavIcons';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavIcons />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="search" element={<MovieCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
