import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 1.5rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 3rem 4rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

export const MainTitle = styled.h1`
  font-size: clamp(7rem, 6vw, 4rem); /* 반응형 크기 */
  font-weight: 800;
  color: ${(props) => props.theme.color.primary};
  margin: 0;
`;

export const SubTitle = styled.h2`
  font-size: 1.25rem;
  color: ${(props) => props.theme.color.primary};
  margin-top: 1rem;
`;

export const Divider = styled.hr`
  width: 40px;
  height: 5px;
  background-color: ${(props) => props.theme.color.primary};
  border: none;
  margin: 1rem 0; // 왼쪽 정렬 위함
  align-self: flex-start;
`;

export const StyledLink = styled(Link)`
  margin: 0.5rem 0;
  font-size: 1.1rem;
  text-decoration: none;
  color: ${(props) => props.theme.color.primary};
  border: 1px solid ${(props) => props.theme.color.border};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.color.border};
  }
`;
