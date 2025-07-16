// src/components/ResultModal/ResultModal.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ResultModal.style';

const ResultModal = ({ time, onRetry }) => {
  const navigate = useNavigate();

  return (
    <S.ModalOverlay>
      <S.ModalBox>
        <S.ModalTitle>🎉 완료!</S.ModalTitle>
        <S.TimeText>총 소요 시간: <strong>{time}초</strong></S.TimeText>
        <S.ButtonGroup>
          <S.ModalButton onClick={() => navigate('/')}>🏠 홈으로</S.ModalButton>
          <S.ModalButton onClick={onRetry}>🔁 한 번 더</S.ModalButton>
        </S.ButtonGroup>
      </S.ModalBox>
    </S.ModalOverlay>
  );
};

export default ResultModal;
