import styled, { keyframes, css } from "styled-components";

const neonGlow = keyframes`
  0% {
    text-shadow: 0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 6px #00FF00;
  }
  50% {
    text-shadow: 0 0 4px #00FF00, 0 0 8px #00FF00, 0 0 10px #00FF00;
  }
  100% {
    text-shadow: 0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 6px #00FF00;
  }
`;

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

export const MainTitle = styled.h1`
  font-size: clamp(7rem, 6vw, 4rem); /* 반응형 크기 */
  font-weight: 800;
  color: ${(props) => props.theme.color.primary};
  margin: 0;

  // 네온 테마일 때만 글로우 효과
  ${({ theme }) =>
    theme.name === 'pixel' &&
    css`
      animation: ${neonGlow} 1.5s infinite alternate;
      text-shadow: 0 0 2px #00FF00, 0 0 4px #00FF00;
    `}

  // 네온 테마가 아닐 때: 페이드인 효과
  ${({ theme }) =>
    theme.name !== 'pixel' &&
    css`
      animation: ${fadeInUp} 1s ease-in-out;
    `}
`;