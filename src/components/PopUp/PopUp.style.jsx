import styled from 'styled-components';

export const PopupWrapper = styled.div`
  border-radius: 8px;
  position: fixed;
  top: 80px;         
  left: 80px;       
  max-width: 450px;
  padding: 1.5rem;
  gap: 2rem;
  background-color: ${(props) => props.theme.color.background};
  border: 1px solid ${(props) => props.theme.color.border};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  border-radius: border-radius: 8px;
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