import styled from 'styled-components';

export const ThemeSelectorWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  text-align: right;
  z-index: 9999;
`;

export const ToggleButton = styled.div`
  cursor: pointer;
  font-weight: bold;
  user-select: none;
  color: ${({ theme }) => theme.color.primary};
`;

export const Dropdown = styled.div`
  gap: 1rem;
  background: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 8px;
  margin: 0.5rem;
  padding: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Option = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color.border};

  &:hover {
    color: ${({ theme }) => theme.color.coloredText};
  }
`;