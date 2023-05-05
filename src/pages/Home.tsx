import React from 'react';

import styled from 'styled-components';

import { colors } from '../constants/variables';

export const HomePage = () => {
  return <Wrapper>Test</Wrapper>;
};

const Wrapper = styled.div(() => ({
  width: '100%',
  background: colors.grayBackground,
}));
