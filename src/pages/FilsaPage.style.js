import styled, { keyframes } from 'styled-components';

// 페이드 인 애니메이션 정의
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

export const FilsaItem = styled.div`
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

export const Paragragh = styled.span`
  white-space: pre-line;
  animation: ${fadeInUp} 0.5s ease-out;
`;

export const Info = styled.span`
  white-space: pre-line;
  font-weight: 800;
  animation: ${fadeInUp} 0.5s ease-out;
`;

export const ParagraphWrapper = styled.div`
  width: 500px;
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
  border: 1px solid #ccc;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: #f0f0f0;
  }
`;
