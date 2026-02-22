import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Poems from './pages/Poems';
import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/poems" element={<Poems />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;