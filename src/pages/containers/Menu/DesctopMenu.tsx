import React from 'react';

import styled from 'styled-components';

import { colors, menuValue } from '../../../constants/variables';

export const DesctopMenu = () => {
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
}));

const Wrapper = styled.div(() => ({
  width: '481px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
