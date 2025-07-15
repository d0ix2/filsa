import React, { useState, useEffect } from 'react';
import * as S from './DictionaryMenu.style';

const DictionaryMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedWord, setSelectedWord] = useState('');

  useEffect(() => {
    const handleContextMenu = (e) => {
      const selection = window.getSelection();
      const text = selection.toString().trim();

      if (text.length > 0) {
        e.preventDefault();
        setSelectedWord(text);
        setMenuPosition({ x: e.pageX, y: e.pageY });
        setMenuVisible(true);
      } else {
        setMenuVisible(false);
      }
    };

    const handleClick = () => {
      setMenuVisible(false);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleSearch = () => {
    const url = `https://dict.naver.com/dict.search?query=${encodeURIComponent(selectedWord)}`;
    window.open(url, '_blank');
    setMenuVisible(false);
  };

  return (
    menuVisible && (
      <S.DictionaryMenuWrapper
        onClick={handleSearch}
        top={menuPosition.y}
        left={menuPosition.x}
      >
        사전에 검색하기
      </S.DictionaryMenuWrapper>
    )
  );
};

export default DictionaryMenu;
