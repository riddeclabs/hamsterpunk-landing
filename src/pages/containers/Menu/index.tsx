import React from 'react';

import styled from 'styled-components';

import { Links } from './Links';

import { burgerIcon } from '../../../assets/images';
import { Content } from '../../../components/Content';
import { Logo } from '../../../components/Logo';
import { colors } from '../../../constants/variables';
import { useMobile } from '../../../utils/commonFunctions';

export const Menu = () => {
  const isMobile = useMobile();
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        borderBottom: `1px solid ${colors.menuBorder}`,
        zIndex: 1,
      }}
    >
      <Content>
        <Wrapper>
          <Logo />
          {isMobile ? <BurgerButton src={burgerIcon} alt='menu' /> : <Links />}
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

const BurgerButton = styled.img(() => ({ cursor: 'pointer' }));
