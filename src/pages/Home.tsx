import React from 'react';

import styled from 'styled-components';

import { AdvantagesBlock } from './containers/AdvantagesBlock';
import { CustomizationBlock } from './containers/CustomizationBlock';
import { FarmingBlock } from './containers/FarmingBlock';
import { Footer } from './containers/Footer';
import { MainBlock } from './containers/MainBlock';
import { NewWayBlock } from './containers/NewWayBlock';
import { VideoBlock } from './containers/VideoBlock';

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

      <MainBlock />
      <NewWayBlock />
      <AdvantagesBlock />
      <FarmingBlock />
      <VideoBlock />
      <CustomizationBlock />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  width: '100%',
  backgroundColor: 'rgba(155, 217, 237, 1)',
  overflowX: 'hidden' || theme?.overflow,
}));

const HiddenSeoText = styled.div(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  zIndex: 0 || theme?.zIndex,
}));
