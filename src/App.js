import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import theme from './styles/theme';

import HomePage from './pages/MainPage/main';
import KoreanFilsa from './pages/FilsaPage/KoreanFilsa';
import JapaneseFilsa from './pages/FilsaPage/JapaneseFilsa';
import GamePage from './pages/GamePage/GamePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/korean" element={<KoreanFilsa />} />
          <Route path="/japanese" element={<JapaneseFilsa />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
