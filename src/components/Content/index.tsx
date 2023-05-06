import React, { FC } from 'react';

import styled from 'styled-components';

import { useMediaValue } from '../../utils/commonFunctions';

export const Content: FC<{
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
}> = ({ children, customStyles }) => {
  return <Container customStyles={customStyles}>{children}</Container>;
};

const Container = styled.div<{ customStyles?: React.CSSProperties }>(
  ({ customStyles }) => ({
    maxWidth: useMediaValue(343, 720, 976, 1312),
    margin: '0 auto',
    width: '100%',
    height: '100%',
    ...customStyles,
  })
);
