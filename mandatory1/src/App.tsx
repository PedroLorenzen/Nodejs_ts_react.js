import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CleanCode from './pages/CleanCode';
import { DogInder } from './pages/Projects';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Projects" element={<DogInder />} />
                <Route path="/CleanCode" element={<CleanCode />} />
            </Routes>
        </Router>
    );
}

export default App;
