import React from 'react';

import styled from 'styled-components';

import { crossImage } from '../../../assets/images';
import { colors, menuValue } from '../../../constants/variables';

type LinksMenuPropsType = {
  setShowMenu: (value: React.SetStateAction<boolean>) => void;
};

export const Links = ({ setShowMenu }: LinksMenuPropsType) => {
  return (
    <Wrapper>
      {menuValue.map((item) => (
        <LinkMenu key={item.id} href={item.to}>
          {item.value}
        </LinkMenu>
      ))}
      <CrossImage
        alt='cross'
        src={crossImage}
        onClick={() => setShowMenu(false)}
      />
    </Wrapper>
  );
};

const CrossImage = styled.img(({ theme }) => ({
  display: 'none',
  width: '10px',
  top: '4px',
  right: '4px',
  cursor: 'pointer',
  '@media screen and (max-width: 768px)': {
    display: 'block',
    position: 'absolute' || theme?.absolute,
  },
}));

const LinkMenu = styled.a(({ theme }) => ({
  fontFamily: 'Josefin Sans',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '16px',
  cursor: 'pointer',
  color: colors.white,

  ':hover': {
    color: colors.titles,
  },

  '@media screen and (max-width: 768px)': {
    color: colors.titles,
    borderBottom: `1px solid ${colors.titles}`,
    width: '100%',
    textAlign: 'center' || theme?.center,
    padding: '0 40px',
    ':hover': {
      color: colors.mainText,
    },
  },
}));

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '87px',

  '@media screen and (max-width: 1024px)': {
    gap: '25px',
  },

  '@media screen and (max-width: 768px)': {
    position: 'fixed',
    left: 0,
    right: 0,
    background: colors.black,
    color: colors.mainText,
    top: 0,
    flexDirection: 'column' || theme?.column,
  },
}));
