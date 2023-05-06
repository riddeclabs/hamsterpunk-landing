import React, { FC } from 'react';

import styled from 'styled-components';

import { arrow } from '../../../assets/images';
import { colors } from '../../../constants/variables';

type Props = {
  id: number;
  question: string;
  answer: string;
  active: boolean;
  answerRows: number;
  answerRowsMobile: number;
  setActive: (id: number | null) => void;
};

export const Question: FC<Props> = ({
  id,
  question,
  answer,
  active,
  answerRows,
  answerRowsMobile,
  setActive,
}) => {
  const handleClick = () => {
    if (active) {
      setActive(null);
    } else setActive(id);
  };

  return (
    <Wrapper
      active={active}
      answerRows={answerRows}
      answerRowsMobile={answerRowsMobile}
      onClick={handleClick}
    >
      <QuestionWithArrow>
        <QuestionText>{question}</QuestionText>
        <QuestionIcon src={arrow} active={active} />
      </QuestionWithArrow>
      <AnswerText>{answer}</AnswerText>
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  active: boolean;
  answerRows: number;
  answerRowsMobile: number;
}>(({ active, answerRows, answerRowsMobile }) => ({
  width: '100%',
  padding: '40px',
  background: colors.lightOrange,
  borderTop: `1px solid ${colors.black}`,
  overflow: 'hidden',
  transition: '.5s all',
  filter: 'none',
  height: active ? `calc(115px + ${answerRows * 21}px + 24px)` : '115px',
  cursor: 'pointer',

  ':hover': {
    filter: 'brightness(1.05)',
    transition: '.5s all',
  },

  '@media screen and (max-width:768px)': {
    padding: '16px',
    height: active ? `calc(50px + ${answerRowsMobile * 16}px + 16px)` : '50px',
  },
}));

const QuestionWithArrow = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const QuestionText = styled.p(() => ({
  fontWeight: 700,
  fontSize: '26px',
  lineHeight: '26px',
  color: colors.black,

  '@media screen and (max-width:768px)': {
    fontSize: '12px',
    lineHeight: '12px',
  },
}));

const QuestionIcon = styled.img<{ active?: boolean }>(({ active }) => ({
  transform: `rotate(${active ? 180 : 0}deg)`,
  transition: `.5s transform`,

  '@media screen and (max-width:768px)': {
    width: '24px',
  },
}));

const AnswerText = styled.p(() => ({
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '21px',
  color: colors.black,
  marginTop: '24px',
  maxWidth: '615px',

  '@media screen and (max-width:768px)': {
    maxWidth: '265px',
    fontSize: '12px',
    lineHeight: '16px',
    marginTop: '16px',
  },
}));
