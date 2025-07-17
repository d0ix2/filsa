import styled from 'styled-components';

export const DictionaryMenuWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  background-color: ${(props) => props.theme.color.background};
  border: 1px solid ${(props) => props.theme.color.border};
  padding: 8px 12px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 9999;
`;
