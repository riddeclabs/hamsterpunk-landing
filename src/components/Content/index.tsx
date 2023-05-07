import React, { FC } from 'react';

import styled from 'styled-components';

import { useMediaValue } from '../../utils/commonFunctions';

export const Content: FC<{
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
  id?: string;
}> = ({ children, customStyles, id }) => {
  return (
    <Container id={id} customStyles={customStyles}>
      {children}
    </Container>
  );
};

const Container = styled.div<{ customStyles?: React.CSSProperties }>(
  ({ customStyles }) => ({
    maxWidth: useMediaValue('90%', '720px', '976px', '1312px'),
    margin: '0 auto',
    width: '100%',
    height: '100%',
    ...customStyles,
  })
);
