import React from 'react';

import styled from 'styled-components';

import { logo } from '../../assets/images';
import { colors } from '../../constants/variables';

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoStyle alt='' src={logo} />
      <LogoText>HUMSTERPUNK</LogoText>
    </LogoWrapper>
  );
};

const LogoStyle = styled.img(() => ({
  height: '48px',

  '@media screen and (max-width: 768px)': {
    height: '33px',
  },
}));

const LogoText = styled.div(() => ({
  fontFamily: 'Titan One',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '25px',
  lineHeight: '29px',
  letterSpacing: '0.04em',
  marginLeft: '6px',

  '@media screen and (max-width: 768px)': {
    fontSize: '18px',
    lineHeight: '20px',
  },
}));

const LogoWrapper = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  color: colors.white,
}));
