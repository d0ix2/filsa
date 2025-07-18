import styled, { keyframes, css } from 'styled-components';

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

// 깜빡임 애니메이션
const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
`;


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
`

// 반응형으로 변경
export const GameWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1rem;
  gap: 10px;
  color: ${(props) => props.theme.color.primary};

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
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

export const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.color.primary};
`;

export const Paragragh = styled.span`
  white-space: pre-line;
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: 500;
  animation: ${fadeInUp} 0.5s ease-out;
  color: ${(props) => props.theme.color.primary};
`;

export const AnswerInput = styled.input`
  width: 100%;
  min-width: 0;      /* flex 줄 바꿈 대비 */
  box-sizing: border-box; /* 패딩과 border 포함한 크기 계산 */
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
  width: 30vh;
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

  ${(props) =>
    props.blink &&
    css`
      animation: ${blink} 1s infinite;
    `}

    &:hover {
    background-color: ${(props) => props.theme.color.border};
  }
`;

// 진행도 전체
export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 12px;
  background-color: #eee;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 8px;
`;

// 실제 진행도
export const ProgressBarFiller = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.color.coloredText};
  width: ${(props) => props.percentage}%;
  transition: width 0.3s ease-in-out;
`;