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

// 컨테이너로 대체
// export const FilsaItem = styled.div`
//   min-height: 100vh;
//   width: 100%;
//   padding: 2rem 1rem;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   gap: 30px;
//   box-sizing: border-box;

//   @media (min-width: 768px) {
//     padding: 3rem;
//   }
// `;

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
  gap: 1rem;
  flex-direction: column;
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

  &:hover {
    background-color: ${(props) => props.theme.color.border};
  }
`;
