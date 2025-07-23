import React from 'react';
import * as S from './Book.style';
import { useNavigate } from 'react-router-dom';

const Book = ({ id, title, author, language }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${language}/works/${id}`);
  };

  return (
    <S.BookContainer onClick={handleClick}>
      <S.InfoWrapper>
        <S.MainTitle>{title}</S.MainTitle>
        <S.Divider />
        <S.SubTitle>{author}</S.SubTitle>
      </S.InfoWrapper>
    </S.BookContainer>
  );
};

export default Book;
