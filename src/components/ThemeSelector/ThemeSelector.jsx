import React, { useState } from 'react';
import * as S from './ThemeSelector.style';

import { FiDroplet } from 'react-icons/fi';

const ThemeSelector = ({ currentTheme, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = ['light', 'dark', 'pink', 'blue', 'green', 'pixel'];

  return (
    <S.ThemeSelectorWrapper>
      <S.ToggleButton
        themeColor={currentTheme}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiDroplet size={20} />
      </S.ToggleButton>
      {isOpen && (
        <S.Dropdown>
          {theme.map((theme) => (
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
              {theme === 'pixel' && '픽셀'}
            </S.Option>
          ))}
        </S.Dropdown>
      )}
    </S.ThemeSelectorWrapper>
  );
};

export default ThemeSelector;
