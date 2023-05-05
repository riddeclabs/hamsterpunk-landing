import React from 'react';

import styled from 'styled-components';

import { Links } from './Links';

import { Content } from '../../../components/Content';
import { Logo } from '../../../components/Logo';
import { colors } from '../../../constants/variables';

export const Menu = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        borderBottom: `1px solid ${colors.menuBorder}`,
      }}
    >
      <Content>
        <Wrapper>
          <Logo />
          <Links />
        </Wrapper>
      </Content>
    </div>
  );
};

const Wrapper = styled.div(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: colors.white,
  height: '65px',
}));
