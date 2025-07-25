import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import * as S from './Bookshelf.style';

const getItemsPerRow = (width) => {
  if (width >= 1400) return 7;
  if (width >= 1200) return 6;
  if (width >= 1000) return 5;
  if (width >= 800) return 4;
  if (width >= 600) return 3;
  return 2;
};

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const Bookshelf = ({ works, language }) => {
  const [itemsPerRow, setItemsPerRow] = useState(
    getItemsPerRow(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsPerRow(getItemsPerRow(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const rows = chunkArray(works, itemsPerRow);

  return (
    <S.ShelfWrapper>
      {rows.map((row, i) => (
        <S.RowWrapper key={i}>
          <S.FlexRow>
            {row.map((work) => (
              <S.BookWrapper key={work.id}>
                <Book
                  id={work.id}
                  title={work.title}
                  author={work.author}
                  language={language}
                />
              </S.BookWrapper>
            ))}
          </S.FlexRow>
          {i < rows.length - 1 && <S.Divider />}
        </S.RowWrapper>
      ))}
    </S.ShelfWrapper>
  );
};

export default Bookshelf;
