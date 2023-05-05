import React from 'react';

import styled from 'styled-components';

import { AdvantagesBlock } from './containers/AdvantagesBlock';
import { FAQBlock } from './containers/FAQBlock';
import { Footer } from './containers/Footer';
import { GalleryBlock } from './containers/GalleryBlock';
import { HumstervilleBlock } from './containers/HumstervilleBlock';
import { MainBlock } from './containers/MainBlock';
import { Menu } from './containers/Menu';
import { NewWayBlock } from './containers/NewWayBlock';
import { ProgressBlock } from './containers/ProgressBlock';
import { VideoBlock } from './containers/VideoBlock';

import { colors } from '../constants/variables';

export const HomePage = () => {
  return (
    <Wrapper>
      <Menu />
      <MainBlock />
      <NewWayBlock />
      <AdvantagesBlock />
      <VideoBlock />
      <GalleryBlock />
      <ProgressBlock />
      <HumstervilleBlock />
      <FAQBlock />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div(() => ({
  width: '100%',
  background: colors.grayBackground,
}));
