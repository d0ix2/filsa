import styled, { keyframes } from 'styled-components';

// 페이드 인 애니메이션
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 반응형으로 변경
export const FilsaItem = styled.div`
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;


export const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.color.primary};
`;

export const Paragragh = styled.span`
  white-space: pre-line;
  font-size: 1.1rem;
  animation: ${fadeInUp} 0.5s ease-out;
  color: ${(props) => props.theme.color.primary};
`;

export const Info = styled.span`
  white-space: pre-line;
  font-size: 1.2rem;
  font-weight: 800;
  animation: ${fadeInUp} 0.5s ease-out;
  color: ${(props) => props.theme.color.primary};
`;

export const ParagraphWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const LoadAnotherButton = styled.button`
  width: 30vh;
  margin: 0.5rem 0;
  font-size: 1.2rem;
  text-decoration: none;
  background-color: transparent;
  color: ${(props) => props.theme.color.primary};
  border: 1px solid ${(props) => props.theme.color.border};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: ${(props) => props.theme.color.border};
  }
`;
