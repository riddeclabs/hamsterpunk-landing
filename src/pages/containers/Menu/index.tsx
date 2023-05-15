import React, { useState, useCallback, useEffect } from 'react';

import styled from 'styled-components';

import { DrawerMenu } from './DrawerMenu';
import { Links } from './Links';

import { burgerIcon } from '../../../assets/images';
import { Content } from '../../../components/Content';
import { Logo } from '../../../components/Logo';
import { colors } from '../../../constants/variables';
import { useMobile } from '../../../utils/commonFunctions';

export const Menu = () => {
  const isMobile = useMobile();

  const [showMenu, setShowMenu] = useState(false);

  const [scroll, setScroll] = useState(0);
  const onScroll = useCallback(() => setScroll(Math.round(window.scrollY)), []);
  useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <div
      style={{
        position: scroll > 300 ? 'fixed' : 'absolute',
        top: '0',
        left: '0',
        right: '0',
        borderBottom: `1px solid ${colors.menuBorder}`,
        zIndex: 1,
        background: scroll > 300 ? colors.black : 'none',
      }}
    >
      <Content>
        <Wrapper>
          <Logo />
          {isMobile ? (
            <BurgerButton
              src={burgerIcon}
              alt='Burger Menu'
              onClick={() => setShowMenu(true)}
            />
          ) : (
            <Links setShowMenu={setShowMenu} />
          )}
          {isMobile && (
            <DrawerMenu setShowMenu={setShowMenu} isActive={showMenu} />
          )}
        </Wrapper>
      </Content>
    </div>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: colors.white,
  height: '65px',
  '@media screen and (max-width: 768px)': {
    position: 'relative' || theme?.relative,
  },
}));

const BurgerButton = styled.img(() => ({ cursor: 'pointer' }));
