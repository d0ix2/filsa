import styled from 'styled-components';

export const ThemeSelectorWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  text-align: right;
`;

export const ToggleButton = styled.div`
  cursor: pointer;
  user-select: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.coloredText};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.color.primary};
`;

export const Dropdown = styled.div`
  position: absolute;
  bottom: 48px;
  right: 0;
  min-width: 90px;
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
