import React from 'react';
import * as S from './Sidebar.style';

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <S.NavLink to="/">홈으로</S.NavLink>
      <S.NavLink to="/korean">한국 문학 필사하기</S.NavLink>
      <S.NavLink to="/japanese">일본 문학 필사하기</S.NavLink>
      <S.NavLink to="/game">한국어 타이핑 게임</S.NavLink>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
