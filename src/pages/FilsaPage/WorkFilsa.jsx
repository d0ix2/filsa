import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import worksKo from '../../data/works-ko.json';
import worksJp from '../../data/works-jp.json';

import * as S from './FilsaPage.style';

import Sidebar from '../../components/Sidebar/Sidebar';
import DictionaryMenu from '../../components/DictionaryMenu/DictionaryMenu';
import FilsaLogo from '../../components/FilsaLogo/FilsaLogo';

const WorkFilsa = () => {
  const { lang, id } = useParams(); // 예: lang = 'ko' 또는 'jp'

  console.log('lang:', lang);
  console.log('id:', id);

  const [paragraph, setParagraph] = useState(null);
  const [work, setWork] = useState(null);

  // 언어에 따라 데이터 선택
  const getWorksData = (lang) => {
    switch (lang) {
      case 'ko':
        return worksKo;
      case 'jp':
        return worksJp;
      default:
        return [];
    }
  };

  // 랜덤 문단 선택 함수
  const getRandomParagraph = (paragraphs) => {
    if (!paragraphs || paragraphs.length === 0) return null;
    const idx = Math.floor(Math.random() * paragraphs.length);
    return paragraphs[idx];
  };

  // 초기 로딩
  useEffect(() => {
    const data = getWorksData(lang);
    const selectedWork = data.find((w) => w.id === id);
    setWork(selectedWork);

    if (selectedWork) {
      const random = getRandomParagraph(selectedWork.paragraphs);
      setParagraph(random);
    }
  }, [lang, id]);

  // 다시 뽑기
  const handleReload = () => {
    if (work) {
      const random = getRandomParagraph(work.paragraphs);
      setParagraph(random);
    }
  };

  if (!work) return <p>작품을 찾을 수 없습니다.</p>;

  return (
    <>
      <Sidebar />
      <DictionaryMenu />
      <S.Container>
        <S.TitleWrapper>
          <FilsaLogo />
          <S.Divider />
          <S.SubTitle>{work.title} 필사하기</S.SubTitle>
        </S.TitleWrapper>

        {paragraph ? (
          <S.ParagraphWrapper>
            <S.Paragragh>{paragraph}</S.Paragragh>
            <S.Info>
              ― {work.author} &lt;{work.title}&gt; ({work.year})
            </S.Info>
            <S.LoadAnotherButton onClick={handleReload}>
              다른 문장 보기
            </S.LoadAnotherButton>
          </S.ParagraphWrapper>
        ) : (
          <p>문장을 불러오는 중...</p>
        )}
      </S.Container>
    </>
  );
};

export default WorkFilsa;
