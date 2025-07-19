import React, { useEffect, useRef, useState } from 'react';
import works from '../../data/works-typing-kr.json';
import * as S from './GamePage.style';

import FilsaLogo from '../../components/FilsaLogo/FilsaLogo';
import ResultModal from '../../components/ResultModal/ResultModal';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function KRGamePage() {
  const [targetSentence, setTargetSentence] = useState(null);
  const [input, setInput] = useState('');
  const [displaySpans, setDisplaySpans] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // 추가
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isComposing, setIsComposing] = useState(false);

  const timerRef = useRef(null);
  const inputRef = useRef(null);

  const getRandomSentence = () => {
    const index = Math.floor(Math.random() * works.length);
    return works[index];
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  const handleStart = () => {
    setTargetSentence(getRandomSentence());
    setInput('');
    setIsStarted(true);
    setIsPaused(false); // 시작 시 일시정지 해제
    setIsGameFinished(false);
    setSentenceCount(0);
    setElapsedTime(0);
    setDisplaySpans([]);
    startTimer();
  };

  const handlePause = () => {
    setIsPaused(true);
    stopTimer();
  };

  const handleResume = () => {
    setIsPaused(false);
    startTimer();
  };

  const handleRestart = () => {
    handleStart();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (!isComposing) {
      compareInputWithTarget(value);
    }
  };

  const handleKeyDown = (e) => {
    if (
      e.key === 'Enter' &&
      !isPaused &&
      input.trim() === targetSentence?.text.trim()
    ) {
      const nextCount = sentenceCount + 1;
      setSentenceCount(nextCount);

      if (nextCount === 10) {
        stopTimer();
        setIsStarted(false);
        setIsGameFinished(true);
        setInput('');
        setDisplaySpans([]);
        return;
      }

      setInput('');
      setDisplaySpans([]);

      setTimeout(() => {
        setTargetSentence(getRandomSentence());
      }, 0);
    }
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = (e) => {
    setIsComposing(false);
    compareInputWithTarget(e.target.value);
  };

  const compareInputWithTarget = (value) => {
    if (!targetSentence) return;

    const inputChars = value.split('');
    const targetChars = targetSentence.text.split('');
    const spans = targetChars.map((char, index) => {
      if (inputChars[index] == null) {
        return <span key={index}>{char}</span>;
      } else if (inputChars[index] === char) {
        return (
          <span key={index} style={{ fontWeight: '800' }}>
            {char}
          </span>
        );
      } else {
        return (
          <span key={index} style={{ color: 'red' }}>
            {char}
          </span>
        );
      }
    });

    setDisplaySpans(spans);
  };

  useEffect(() => {
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <>
      <Sidebar />
      <S.Container>
        <S.TitleWrapper>
          <FilsaLogo />
          <S.Divider />
          <S.SubTitle>한국어 타이핑 게임</S.SubTitle>
        </S.TitleWrapper>
        <S.GameWrapper>
          <S.InfoWrapper>
            <span>경과 시간: {elapsedTime}초</span>
            <S.ProgressBarContainer>
              <S.ProgressBarFiller percentage={(sentenceCount / 10) * 100} />
            </S.ProgressBarContainer>
          </S.InfoWrapper>

          <S.Paragragh key={targetSentence?.text}>
            {displaySpans.length > 0
              ? displaySpans
              : targetSentence?.text || '시작 버튼을 눌러 게임을 시작하세요'}
          </S.Paragragh>

          <S.AnswerInput
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onCompositionStart={handleCompositionStart}
            onCompositionEnd={handleCompositionEnd}
            disabled={!isStarted || isPaused || isGameFinished}
            placeholder="위 문장을 입력하고 Enter를 누르세요"
          />

          {/* ▶ 시작 버튼 (처음에만) */}
          {/* 시작 전 깜빡거림 애니메이션 추가 */}
          {!isStarted && !isGameFinished && (
            <S.Button onClick={handleStart} blink>
              ▶ 게임 시작
            </S.Button>
          )}

          {/* 일시 정지 / 재개 버튼 */}
          {isStarted &&
            !isGameFinished &&
            (isPaused ? (
              <S.Button onClick={handleResume}>▶ 다시 시작</S.Button>
            ) : (
              <S.Button onClick={handlePause}>⏸ 일시 정지</S.Button>
            ))}

          {/* 결과 모달 */}
          {isGameFinished && (
            <ResultModal time={elapsedTime} onRetry={handleRestart} />
          )}
        </S.GameWrapper>
      </S.Container>
    </>
  );
}
