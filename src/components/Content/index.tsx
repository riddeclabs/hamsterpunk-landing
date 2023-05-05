import React, { FC } from 'react';

import styled from 'styled-components';

export const Content: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div(() => ({
  maxWidth: 1312,
  margin: '0 auto',
}));
