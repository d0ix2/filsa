import React from 'react';
import * as S from './SelectingPage.style';

import FilsaLogo from '../../components/FilsaLogo/FilsaLogo';
import Sidebar from '../../components/Sidebar/Sidebar';

const KoreanSelectingPage = () => {
  return (
    <>
      <Sidebar />
      <S.Container>
        <S.TitleWrapper>
          <FilsaLogo />
          <S.Divider />
          <S.SubTitle>어떤 방식으로 필사를 시작할까요?</S.SubTitle>
        </S.TitleWrapper>

        <S.StyledLink to="/korean-all">전체 작품에서 랜덤으로</S.StyledLink>
        <S.StyledLink to="/korean-bookshelf">
          특정 작품에서 랜덤으로
        </S.StyledLink>
      </S.Container>
    </>
  );
};

export default KoreanSelectingPage;
