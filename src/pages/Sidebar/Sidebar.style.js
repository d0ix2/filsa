import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 200px;
  background-color: #f9f9f9;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  gap: 2rem;
  z-index: 100;
`;

export const NavLink = styled(Link)`
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #B2B1B2;
    font-weight: bold;
  }
`;
