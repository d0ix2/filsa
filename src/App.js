import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import theme from './styles/theme';

import MainPage from './pages/MainPage/main';
import KoreanFilsaAll from './pages/FilsaPage/FilsaAllPage/KoreanFilsaAll';
import JapaneseFilsaAll from './pages/FilsaPage/FilsaAllPage/JapaneseFilsaAll';
import KRGamePage from './pages/GamePage/KRGamePage';
import JPGamePage from './pages/GamePage/JPGamePage';
import KoreanBookshelf from './pages/BookshelfPage/KoreanBookshelf';
import JapaneseBookshelf from './pages/BookshelfPage/JapaneseBookshelf';
import WorkFilsa from './pages/FilsaPage/WorkFilsa';
import KoreanSelectingPage from './pages/SelectingPage/KoreanSelectingPage';
import JapaneseSelectingPage from './pages/SelectingPage/JapaneseSelectingPage';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                currentTheme={currentTheme}
                onThemeChange={(e) => setCurrentTheme(e.target.value)}
              />
            }
          />
          <Route path="/korean-all" element={<KoreanFilsaAll />} />
          <Route path="/korean-bookshelf" element={<KoreanBookshelf />} />
          <Route path="/japanese-all" element={<JapaneseFilsaAll />} />
          <Route path="/japanese-bookshelf" element={<JapaneseBookshelf />} />
          <Route path="/korean-selecting" element={<KoreanSelectingPage />} />
          <Route
            path="/japanese-selecting"
            element={<JapaneseSelectingPage />}
          />

          <Route path="/korean-game" element={<KRGamePage />} />
          <Route path="/japanese-game" element={<JPGamePage />} />
          <Route path="/:lang/works/:id" element={<WorkFilsa />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
