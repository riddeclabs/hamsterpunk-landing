import React, { FC } from 'react';

import styled from 'styled-components';

export const Content: FC<{
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
}> = ({ children, customStyles }) => {
  return <Container customStyles={customStyles}>{children}</Container>;
};

const Container = styled.div<{ customStyles?: React.CSSProperties }>(
  ({ customStyles }) => ({
    maxWidth: 1312,
    margin: '0 auto',
    width: '100%',
    height: '100%',
    ...customStyles,
  })
);
