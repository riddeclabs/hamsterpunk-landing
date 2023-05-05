import React from 'react';

import styled from 'styled-components';

import { DesctopMenu } from './DesctopMenu';

import { Logo } from '../../../components/Logo';
import { colors } from '../../../constants/variables';

export const Menu = () => {
  //TODO add Container components
  return (
    <Wrapper>
      <Logo />
      <DesctopMenu />
    </Wrapper>
  );
};

const Wrapper = styled.div(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: colors.white,
  borderBottom: `1px solid ${colors.menuBorder}`,
  height: '65px',
}));
