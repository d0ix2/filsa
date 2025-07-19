import React, { useState } from 'react';
import * as S from './Sidebar.style';
import { FiMenu, FiX } from 'react-icons/fi'; // 햄버거 아이콘

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <S.HamburgerButton onClick={toggleSidebar}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </S.HamburgerButton>

      <S.SidebarWrapper isOpen={isOpen}>
        <S.NavLink to="/" onClick={closeSidebar}>
          홈으로
        </S.NavLink>
        <S.NavLink to="/korean" onClick={closeSidebar}>
          한국 문학 필사하기
        </S.NavLink>
        <S.NavLink to="/japanese" onClick={closeSidebar}>
          일본 문학 필사하기
        </S.NavLink>
        <S.NavLink to="/game-kr" onClick={closeSidebar}>
          한국어 타이핑 게임
        </S.NavLink>
        <S.NavLink to="/game-jp" onClick={closeSidebar}>
          일본어 타이핑 게임
        </S.NavLink>
      </S.SidebarWrapper>

      {isOpen && <S.Overlay onClick={closeSidebar} />}
    </>
  );
};

export default Sidebar;
