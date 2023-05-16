import React from 'react';

import styled from 'styled-components';

import { Typography } from '../../../components/Typography';

type AdvItemPropsType = {
  text: string;
  title: string;
  id?: string;
};

export const AdvantagesItem = ({ text, title, id }: AdvItemPropsType) => {
  return (
    <Wrapper>
      <Title>
        <Typography text={title} variant='subtitle' />
      </Title>
      <Text>
        <Typography text={text} variant='text' id={id} />
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  width: '100%',
  paddingBottom: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column' || theme.column,
  maxWidth: '346px',
  textAlign: 'center',

  '@media screen and (max-width:1023px)': {
    paddingBottom: '20px',
  },

  '@media screen and (max-width:768px)': {
    paddingBottom: '16px',
  },
}));

const Title = styled.div(() => ({}));

const Text = styled.div(() => ({
  marginTop: '33px',

  '@media screen and (max-width:1023px)': {
    marginTop: '22px',
  },

  '@media screen and (max-width:768px)': {
    marginTop: '16px',
  },
}));
