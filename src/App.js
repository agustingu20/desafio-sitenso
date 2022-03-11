import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieCard from './components/MovieCard';
import NavIcons from './components/NavIcons';



function App() {
  return (
    <div className="App">
      <NavIcons />
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
