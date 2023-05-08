import React from 'react';

import styled from 'styled-components';

import { intersectBottom } from '../../../assets/images';
import { Content } from '../../../components/Content';
import { Logo } from '../../../components/Logo';
import { colors } from '../../../constants/variables';
import { Subscription } from '../Subscription';

export const Footer = () => {
  return (
    <Block>
      <Content>
        <Subscription />
        <Wrapper>
          <Logo />
          <CopyBlock>2023 Riddec. All rights reserved</CopyBlock>
        </Wrapper>
      </Content>
      <Intersect />
    </Block>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex' || theme?.display,
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '66px',
  marginTop: '36px',

  '@media screen and (max-width:768px)': {
    paddingBottom: '40px',
    flexDirection: 'column',
  },
}));

const Block = styled.div(({ theme }) => ({
  position: 'relative' || theme?.relative,
}));

const CopyBlock = styled.div(() => ({
  color: colors.white,
  fontWeight: 400,
  opacity: '0.4',
  '@media screen and (max-width:768px)': {
    marginTop: '15px',
  },
}));

const Intersect = styled.div(({ theme }) => ({
  position: 'absolute' || theme?.position,
  left: '-1px',
  right: '-1px',
  width: '100%',
  height: '86px',
  background: `url(${intersectBottom})`,
  backgroundSize: 'cover',
  top: '-196px',

  '@media screen and (max-width:1440px)': {
    top: '-152px',
  },

  '@media screen and (max-width:768px)': {
    top: '-85px',
  },
}));
