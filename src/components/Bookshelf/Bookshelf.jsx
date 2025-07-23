import React from 'react';
import Book from '../Book/Book';
import * as S from './Bookshelf.style';

const Bookshelf = ({ works, language }) => {
  return (
    <S.ShelfContainer>
      {works.map((work) => (
        <Book
          key={work.id}
          id={work.id}
          title={work.title}
          author={work.author}
          language={language}
        />
      ))}
    </S.ShelfContainer>
  )
};

export default Bookshelf;
