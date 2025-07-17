import React from 'react';
import * as S from './main.style';

import Popup from '../../components/PopUp/PopUp';
import ThemeSelector from '../../components/ThemeSelector/ThemeSelector';

const HomePage = ({ currentTheme, onThemeChange }) => {
  return (
    <S.Container>
      <Popup />
      <ThemeSelector currentTheme={currentTheme} onChange={onThemeChange} />

      <S.TitleWrapper>
        <S.MainTitle>filsa</S.MainTitle>
        <S.Divider />
        <S.SubTitle>filsa는 하루에 한 문단씩 필사하며 언어를 공부할 수 있는 서비스입니다.</S.SubTitle>
        <S.SubTitle>저작권이 만료된 검증된 문학 작품들 중에서 한 문단을 무작위로 골라 제공합니다.</S.SubTitle>
        <S.SubTitle>문학 작품을 통해 어휘력과 문장력을 함께 키워 보세요.</S.SubTitle>
      </S.TitleWrapper>

      <S.StyledLink to="/korean">한국 문학 필사하기</S.StyledLink>
      <S.StyledLink to="/japanese">일본 문학 필사하기</S.StyledLink>
      <S.StyledLink to="/game">한국어 타이핑 게임</S.StyledLink>
    </S.Container>
  );
};

export default HomePage;


