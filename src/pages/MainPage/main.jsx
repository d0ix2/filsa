import React from 'react';
import * as S from './main.style';

import Popup from '../../components/PopUp/PopUp';
import ThemeSelector from '../../components/ThemeSelector/ThemeSelector';

const HomePage = ({ currentTheme, onThemeChange }) => {
  return (
    <S.Container>
      <Popup />
      <ThemeSelector currentTheme={currentTheme} onChange={onThemeChange} />
      <S.Title>filsa: 문학 작품 필사하기</S.Title>
      <S.StyledLink to="/korean">한국 문학 필사하기</S.StyledLink>
      <S.StyledLink to="/japanese">일본 문학 필사하기</S.StyledLink>
      <S.StyledLink to="/game">한국어 타이핑 게임</S.StyledLink>
    </S.Container>
  );
};

export default HomePage;

