import styled from 'styled-components';

export const DictionaryMenuWrapper = styled.div`
  position: absolute;
  text-decoration: none;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  background-color: ${(props) => props.theme.color.background};
  border: 1px solid ${(props) => props.theme.color.border};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: ${(props) => props.theme.color.primary};
  z-index: 9999;
`;
