import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import React from 'react';
import Home from './components/Home';
import Vans from './components/Vans';
import VanDetail from './components/VanDetail';

function App() {
  return (
      <BrowserRouter>
        <header>
          <Link to="/">Vanlife</Link>

          <nav>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/"
                 element={<Home />} />
          <Route path="/about"
                 element={<About />} />
          <Route path="/vans"
                 element={<Vans />} />
          <Route path="/vans/:id"
                 element={<VanDetail />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
