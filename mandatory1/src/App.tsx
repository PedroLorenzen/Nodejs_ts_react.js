import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CleanCode from './pages/CleanCode';
import Rendering from './pages/Rendering';
import Node from './pages/Node';
import { DogInder } from './pages/Projects';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<DogInder />} />
                <Route path="/cleancode" element={<CleanCode />} />
                <Route path="/node" element={<Node />} />
                <Route path="/rendering" element={<Rendering />} />
            </Routes>
        </Router>
    );
}

export default App;
