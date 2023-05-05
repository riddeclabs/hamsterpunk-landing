import React from 'react';

import styled from 'styled-components';

import { colors, menuValue } from '../../../constants/variables';

export const Links = () => {
  return (
    <Wrapper>
      {menuValue.map((item) => (
        <LinkMenu key={item.id} href={item.to}>
          {item.value}
        </LinkMenu>
      ))}
    </Wrapper>
  );
};

const LinkMenu = styled.a(() => ({
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
}));

const Wrapper = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '87px',
}));
