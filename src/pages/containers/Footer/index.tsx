import React from 'react';

import styled from 'styled-components';

import { intersectBottom } from '../../../assets/images';
import { Subscription } from '../Subscription';

export const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <Subscription />

        <Intersect />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  width: '100%' || theme?.width,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Content = styled.div(({ theme }) => ({
  display: 'flex' || theme?.display,
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '100px',
  maxWidth: '1280px',
}));

const Intersect = styled.div(({ theme }) => ({
  position: 'absolute' || theme?.position,
  left: '-1px',
  right: '-1px',
  width: 'calc(100% + 2px)',
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
