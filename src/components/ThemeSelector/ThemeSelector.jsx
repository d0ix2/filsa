import React, { useState } from 'react';
import * as S from './ThemeSelector.style'

const ThemeSelector = ({ currentTheme, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const themes = ['light', 'dark', 'pink', 'blue', 'green'];

  return (
    <S.ThemeSelectorWrapper>
      <S.ToggleButton onClick={() => setIsOpen(!isOpen)}>
        테마 선택 ⌄
      </S.ToggleButton>
      {isOpen && (
        <S.Dropdown>
          {themes.map((theme) => (
            <S.Option
              key={theme}
              onClick={(e) => {
                onChange({ target: { value: theme } });
                setIsOpen(false);
              }}
              style={{
                fontWeight: currentTheme === theme ? 'bold' : 'normal',
              }}
            >
              {theme === 'light' && '라이트'}
              {theme === 'dark' && '다크'}
              {theme === 'pink' && '핑크'}
              {theme === 'blue' && '블루'}
              {theme === 'green' && '그린'}
            </S.Option>
          ))}
        </S.Dropdown>
      )}
    </S.ThemeSelectorWrapper>
  );
};

export default ThemeSelector;
