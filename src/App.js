import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/main';
import KoreanFilsa from './pages/KoreanFilsa';
import JapaneseFilsa from './pages/JapaneseFilsa';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/korean" element={<KoreanFilsa />} />
        <Route path="/japanese" element={<JapaneseFilsa />} />
      </Routes>
    </Router>
  );
}

export default App;

