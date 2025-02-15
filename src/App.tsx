import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PoemPage from './pages/PoemPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/poem/:id" element={<PoemPage />} />
    </Routes>
  );
}

export default App;