import React, { useState } from 'react';

import styled from 'styled-components';

import { Question } from './Question';

import { Content } from '../../../components/Content';
import { Typography } from '../../../components/Typography';
import { colors, questions } from '../../../constants/variables';

export const FAQBlock = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(1);

  return (
    <Wrapper id='faq'>
      <Content>
        <Typography
          text='FAQ'
          variant='title'
          color={colors.black}
          textAlign='center'
        />
        <QuestionsWrapper>
          {questions.map((question) => (
            <Question
              key={question.id}
              active={activeQuestion === question.id}
              setActive={setActiveQuestion}
              {...question}
            />
          ))}
        </QuestionsWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div(() => ({
  marginTop: '110px',
  paddingBottom: 0,

  '@media screen and (max-width:1439px)': {
    marginTop: '88px',
  },

  '@media screen and (max-width:1023px)': {
    marginTop: '68px',
  },

  '@media screen and (max-width:768px)': {
    marginTop: '68px',
  },
}));

const QuestionsWrapper = styled.div(() => ({
  marginTop: '52px',
  paddingBottom: '0px',

  '>div:first-of-type': {
    borderTop: 'none',
  },

  '@media screen and (max-width:1439px)': {
    marginTop: '36px',
  },

  '@media screen and (max-width:1023px)': {
    marginTop: '30px',
  },

  '@media screen and (max-width:768px)': {
    marginTop: '24px',
  },
}));
