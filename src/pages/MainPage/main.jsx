import React from 'react';
import * as S from './main.style';

const HomePage = () => {
  return (
    <S.Container>
      <S.Title>filsa: 문학 작품 필사하기</S.Title>
      <S.StyledLink to="/korean">한국 문학 필사하기</S.StyledLink>
      <S.StyledLink to="/japanese">일본 문학 필사하기</S.StyledLink>
    </S.Container>
  );
};

export default HomePage;
