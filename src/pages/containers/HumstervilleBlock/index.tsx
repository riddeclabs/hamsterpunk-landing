import React from 'react';

import styled from 'styled-components';

import { humstervilleImage } from '../../../assets/images';
import { Content } from '../../../components/Content';
import { Typography } from '../../../components/Typography';
import { colors } from '../../../constants/variables';

export const HumstervilleBlock = () => {
  return (
    <Block>
      <Content>
        <Wrapper>
          <Typography
            text='Hamsterville'
            variant='title'
            color={colors.black}
          />
          <Text>
            <Typography
              color={colors.black}
              text='Welcome to the home of hamsters - a cosy island floating in the sky. Explore and attach lands to make Hamsterville flourish.'
              lineHeight={'32px'}
              fontSize={'24px'}
              variant='text'
            />
          </Text>

          <ProgressImage alt='Hamsterville' src={humstervilleImage} />
        </Wrapper>
      </Content>
    </Block>
  );
};

const Block = styled.div(() => ({
  marginTop: '110px',

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

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column' || theme.column,
  alignItems: 'center',
  textAlign: 'center',
}));

const ProgressImage = styled.img(() => ({
  marginTop: '52px',
  maxWidth: '100%',

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
const Text = styled.div(({ theme }) => ({
  margin: '52px auto 0',
  textAlign: 'center' || theme?.center,
  width: '598px',

  '@media screen and (max-width:1439px)': {
    margin: '42px auto 0',
  },

  '@media screen and (max-width:1023px)': {
    margin: '32px auto 0',
  },

  '@media screen and (max-width:768px)': {
    margin: '24px auto 0',
    width: '398px',
    maxWidth: '100%',
  },
}));
