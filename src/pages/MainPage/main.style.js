import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
`;

export const StyledLink = styled(Link)`
  margin: 0.5rem 0;
  font-size: 1.2rem;
  text-decoration: none;
  color: #333;
  border: 1px solid #ccc;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Paragragh = styled.span`
  white-space: pre-line;
`;