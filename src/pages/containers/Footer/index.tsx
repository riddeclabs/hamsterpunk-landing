import React from 'react';

import styled from 'styled-components';

import { intersectBottom } from '../../../assets/images';
import { Content } from '../../../components/Content';
import { Logo } from '../../../components/Logo';
import { colors } from '../../../constants/variables';

export const Footer = () => {
  return (
    <Block>
      <Content>
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
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '76px',
  '@media screen and (max-width:768px)': {
    flexDirection: 'column' || theme.column,
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
  left: 0,
  right: 0,
  width: '100%',
  height: '86px',
  background: `url(${intersectBottom})`,
  backgroundSize: 'cover',
  top: '-85px',
}));
