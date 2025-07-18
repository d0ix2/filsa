import styled from 'styled-components';

export const PopupWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%; /* ✅ 중앙 정렬 기준을 right → left로 수정 */
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 90vh;
  overflow-y: auto;

  padding: 1.5rem;
  gap: 2rem;
  background-color: ${(props) => props.theme.color.background};
  border: 1px solid ${(props) => props.theme.color.border};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 1000;

  @media (min-width: 768px) {
    top: 80px;
    right: 80px;       /* PC에서는 우상단에 배치 */
    left: auto;         /* 모바일용 left를 제거 */
    transform: none;    /* 중앙 정렬 해제 */
    width: auto;
    max-height: none;
  }
`;



export const CloseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.primary};
`;

export const Button = styled.button`
  width: 20vh;
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

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
`;

export const ParagraghWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
`;

export const TitleText = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.color.primary};
`;

export const PlainText = styled.span`
  white-space: pre-line;
  color: ${(props) => props.theme.color.primary};
`;

export const HighlightedText = styled.span`
  white-space: pre-line;
  font-weight: 800;
  font-size: 1.1rem;
  color: ${(props) => props.theme.color.primary};
`;

export const BoldText = styled.span`
  white-space: pre-line;
  font-size: 1.2rem;
  font-weight: 800;
  color: ${(props) => props.theme.color.primary};
`;