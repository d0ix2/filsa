import { useEffect, useState } from 'react';
import * as S from './PopUp.style'

const Popup = () => {
  const [visible, setVisible] = useState(false);
  const [doNotShow, setDoNotShow] = useState(false);

  useEffect(() => {
    const hideUntil = localStorage.getItem('hidePopupUntil');
    if (!hideUntil || new Date().getTime() > parseInt(hideUntil)) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    if (doNotShow) {
      const oneWeekLater = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem('hidePopupUntil', oneWeekLater.toString());
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <S.PopupWrapper>
      <S.InfoItem>
        <S.TitleText>filsa에 오신 것을 환영합니다!</S.TitleText>
        <S.ParagraghWrapper>
            <S.BoldText>filsa란?</S.BoldText>
            <S.PlainText>
                filsa는 하루에 한 문단씩 필사하며 언어를 공부할 수 있는 서비스입니다.
                저작권이 만료된 검증된 문학 작품들 중에서 한 문단을 무작위로 골라 제공합니다.
                문학 작품을 통해 어휘력과 문장력을 함께 키워 보세요.
            </S.PlainText>
        </S.ParagraghWrapper>
        <S.ParagraghWrapper>
            <S.BoldText>주요 기능</S.BoldText>
            <S.PlainText>
                1. 모르는 단어가 있으신가요? <S.HighlightedText>마우스로 드래그해 우클릭</S.HighlightedText>해 보세요.
                네이버 사전을 이용해 모르는 단어를 바로 검색할 수 있습니다.
            </S.PlainText>
            <S.PlainText>
                2. 타이핑 연습이 필요하신가요? <S.HighlightedText>'한국어 타이핑 게임' 메뉴</S.HighlightedText>를 이용해 보세요.
                문학 작품에서 랜덤으로 가져 온 문장을 이용해 타이핑을 연습할 수 있습니다.
                타이핑에 걸린 총 소요 시간을 측정해 드려요.
            </S.PlainText>
            <S.PlainText>
                3. 테마를 변경하고 싶으신가요?
                내 취향에 맞는 <S.HighlightedText>컬러 테마</S.HighlightedText>를 이용해 보세요.
                라이트, 다크뿐만 아니라 핑크, 블루 등 여러 가지 컬러의 테마를 준비했어요.
            </S.PlainText>
        </S.ParagraghWrapper>
      </S.InfoItem>
      <S.CloseWrapper>
      <S.CheckboxWrapper>
        <input
          type="checkbox"
          id="doNotShow"
          checked={doNotShow}
          onChange={(e) => setDoNotShow(e.target.checked)}
        />
        <label htmlFor="doNotShow" style={{ marginLeft: '8px' }}>일주일 간 보지 않기</label>
      </S.CheckboxWrapper>
      <S.Button onClick={handleClose}>닫기</S.Button>
      </S.CloseWrapper>
    </S.PopupWrapper>
  );
};

export default Popup;
