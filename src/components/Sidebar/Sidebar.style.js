import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarWrapper = styled.div`
  position: fixed;
  right: ${({ isOpen }) => (isOpen ? '0' : '-220px')}; /* 열림, 닫힘 */
  top: 0;
  height: 100vh;
  width: 200px;
  background-color: ${(props) => props.theme.color.primary};
  border-left: 1px solid ${(props) => props.theme.color.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  gap: 2rem;
  z-index: 1000;
  transition: left 0.3s ease; /* 부드러운 이동 */
`;

export const NavLink = styled(Link)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.color.background};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.color.coloredText};
    font-weight: bold;
  }
`;

export const HamburgerButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: none;
  color: ${(props) => props.theme.color.primary};
  border: none;
  cursor: pointer;
  z-index: 1100; /* 사이드바보다 위에 있어야 하므로 */
`;

/* 오버레이 효과 */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 999;
`;
