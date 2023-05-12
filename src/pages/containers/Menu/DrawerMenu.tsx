import React, { FC } from 'react';

import styled from 'styled-components';

import { burgerIcon } from '../../../assets/images';
import { Content } from '../../../components/Content';
import { Logo } from '../../../components/Logo';
import { colors, menuValue } from '../../../constants/variables';

type Props = {
  isActive?: boolean;
  setShowMenu: (isShowMenu: boolean) => void;
};

export const DrawerMenu: FC<Props> = ({ isActive, setShowMenu }) => {
  return (
    <Wrapper isActive={isActive}>
      <TopBlock>
        <Logo />
        <BurgerButton
          src={burgerIcon}
          alt='Burger Menu'
          onClick={() => setShowMenu(false)}
        />
      </TopBlock>
      <Content>
        <LinksWrapper>
          {menuValue.map((item) => (
            <LinkMenu
              onClick={() => setShowMenu(false)}
              key={item.id}
              href={item.to}
            >
              {item.value}
            </LinkMenu>
          ))}
        </LinksWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isActive?: boolean }>(({ isActive }) => ({
  position: 'fixed',
  left: 0,
  right: 0,
  background: colors.black,
  top: isActive ? '0' : '-287px',
  transition: '.5s top',
}));

const TopBlock = styled.div(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'rgb(255, 255, 255)',
  height: '65px',
  padding: '0px 5%',
  background: '#000',
}));

const LinksWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column' || theme?.column,
  alignItems: 'center',
  padding: '15px 0',
}));

const BurgerButton = styled.img(() => ({ cursor: 'pointer' }));

const LinkMenu = styled.a(() => ({
  fontFamily: 'Josefin Sans',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '18px',
  cursor: 'pointer',
  color: colors.white,
  padding: '15px 0',

  ':hover': {
    color: colors.titles,
  },
}));
