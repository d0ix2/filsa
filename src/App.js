import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/MainPage/main';
import KoreanFilsa from './pages/FilsaPage/KoreanFilsa';
import JapaneseFilsa from './pages/FilsaPage/JapaneseFilsa';
import GamePage from './pages/GamePage/GamePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/korean" element={<KoreanFilsa />} />
        <Route path="/japanese" element={<JapaneseFilsa />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;

