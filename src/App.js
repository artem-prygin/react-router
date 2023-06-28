import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import React from 'react';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          Vanlife
        </Link>

        <nav>
          <Link to="/about">
            About
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
