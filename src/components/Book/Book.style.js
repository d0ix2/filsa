import styled from 'styled-components';

export const BookContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  cursor: pointer;
  background-color: white;
  padding: 1rem;
  width: 160px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const MainTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${(props) => props.theme.color.coloredText};
  margin: 0;

  word-break: keep-all; // 단어 단위 줄바꿈
  line-height: 1.4;
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-size: 1.25rem;
  color: ${(props) => props.theme.color.coloredText};
  margin-top: 1rem;
`;

export const Divider = styled.hr`
  width: 40px;
  height: 5px;
  background-color: ${(props) => props.theme.color.background};
  border: none;
  margin: 1rem 0; // 왼쪽 정렬 위함
`;
