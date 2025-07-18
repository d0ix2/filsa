import React, { useEffect, useState } from 'react';
import * as S from './FilsaPage.style';
import getRandomParagraph from '../../hooks/useRandomParagraph';
import worksData from '../../data/works-ko.json';

import FilsaLogo from '../../components/FilsaLogo/FilsaLogo';
import Sidebar from '../../components/Sidebar/Sidebar';
import DictionaryMenu from '../../components/DictionaryMenu/DictionaryMenu';

const KoreanFilsa = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const random = getRandomParagraph(worksData);
    setQuote(random);
  }, []);

  const handleReload = () => {
    const random = getRandomParagraph(worksData);
    setQuote(random);
  };

  return (
    <>
      <Sidebar />
      <DictionaryMenu />
      <S.Container>
        <S.TitleWrapper>
        <FilsaLogo />
        <S.Divider />
        <S.SubTitle>한국 문학 필사하기</S.SubTitle>
        </S.TitleWrapper>
        {quote ? (
          <S.ParagraphWrapper>
            <S.Paragragh key={quote.paragraph}>{quote.paragraph}</S.Paragragh>
            <S.Info key={quote.author + quote.title}>
              ― {quote.author} &lt;{quote.title}&gt; ({quote.year})
            </S.Info>
            <S.LoadAnotherButton onClick={handleReload} className="loadAnother">
              다른 문장 보기
            </S.LoadAnotherButton>
          </S.ParagraphWrapper>
        ) : (
          <p>불러오는 중...</p>
        )}
      </S.Container>
    </>
  );
};

export default KoreanFilsa;
