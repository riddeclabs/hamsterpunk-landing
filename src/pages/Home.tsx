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

import { orangeBg } from '../assets/images';
import { colors } from '../constants/variables';

export const HomePage = () => {
  return (
    <Wrapper id='home'>
      <HiddenSeoText>
        <h1>Hamsterpunk Crypto Game</h1>

        <h2>PLAY TO EARN IDLE GAME THAT TEACHES CRYPTO</h2>

        <h3>
          Hamsterpunk is an ultimate idle farming game with cute and curious
          hamsters to command, manifold structures to build, upgrades to unlock
          and rewards to get.
        </h3>

        <h4>
          Meet the cute, curious and a bit lazy hamsters of Hamsterpunk. Help
          them to harvest crops, gather resources, expand and prosper.
        </h4>

        <h5>
          Research new technologies, build complex machines, hire hamsters crew
          to maximise production of resources.
        </h5>

        <h6>
          Welcome to the home of hamsters - a cosy island floating in the sky.
          Explore and attach lands to make Hamsterville flourish.
        </h6>
      </HiddenSeoText>
      <Menu />
      <MainBlock />
      <NewWayBlock />
      <AdvantagesBlock />
      <VideoBlock />
      <OrangeBackgroundWrapper>
        <GalleryBlock />
        <ProgressBlock />
        <HumstervilleBlock />
        <FAQBlock />
      </OrangeBackgroundWrapper>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  width: '100%',
  background: colors.grayBackground,
  overflowX: 'hidden' || theme?.overflow,
}));

const OrangeBackgroundWrapper = styled.div(() => ({
  width: '100%',
  background: `url(${orangeBg})`,
}));

const HiddenSeoText = styled.div(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  zIndex: 0 || theme?.zIndex,
}));
