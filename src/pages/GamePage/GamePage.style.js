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
export const GameWrapper = styled.div`
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: ${(props) => props.theme.color.primary};

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
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
  font-size: 1.2rem;
  font-weight: 500;
  animation: ${fadeInUp} 0.5s ease-out;
  color: ${(props) => props.theme.color.primary};
`;

export const AnswerInput = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 1rem;
  font-size: 1rem;
  outline: none;
  border: 1px solid ${(props) => props.theme.color.border};
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.border};
  border-radius: 8px;

  ::placeholder {
    color: ${(props) => props.theme.color.primary};
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 300px;
  margin: 0.5rem 0;
  font-size: 1.2rem;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.color.border};
  color: ${(props) => props.theme.color.primary};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: ${(props) => props.theme.color.border};
  }
`;

