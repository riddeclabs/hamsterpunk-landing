import React from 'react';

import styled from 'styled-components';

import {
  advantageCloud1,
  customizationCloudRight,
  farmingCloudLeft,
  idleCloud2,
  trailerCloudLeft,
} from '../../../assets/images';

const roadMaps = [
  {
    data: 'June 2024',
    title: 'Launch of the Base Game',
    info: 'Experience the beginning of your adventure with the launch of our base game! Get ready to explore and start your journey.',
  },
  {
    data: 'July 2024',
    title: 'Upgrades System',
    info: 'Enhance your gameplay with the introduction of our Upgrades System. Customize and improve your experience.',
  },
  {
    data: 'Aug. 2024',
    title: 'More Islands',
    info: 'Expand your horizons with new islands to discover and explore. Each island brings new challenges and rewards.',
  },
  {
    data: 'Sept. 2024',
    title: 'Decorative Items',
    info: 'Personalize your world with a variety of decorative items. Make your space uniquely yours.',
  },
  {
    data: 'Q4 2024',
    title: 'More Boosts',
    info: 'Boost your progress with additional power-ups and bonuses. Take your game to the next level.',
  },
  {
    data: 'Q1 2025',
    title: 'More Hamster Professions',
    info: 'Unlock new hamster professions, adding depth and variety to your gameplay. Each profession offers unique abilities and perks.',
  },
  {
    data: 'Q2 2025',
    title: 'Premium Currency and Related Content',
    info: 'Introduce premium currency along with exclusive decorations, upgrades, islands, and professions. Elevate your gaming experience with premium features.',
  },
  {
    data: 'Q3 2025',
    title: 'NFT-Based Decorations and Market',
    info: 'Dive into the world of NFTs with unique, collectible decorations. Trade and market your NFTs with other players.',
  },
  {
    data: 'Q4 2025',
    title: 'Crypto Airdrops to Premium Currency Owners',
    info: 'Receive exclusive crypto airdrops as a reward for owning premium currency. Enjoy the benefits and rewards of being a premium player.',
  },
];

export const GameRoadmap = () => {
  return (
    <Wrapper>
      <Content>
        <Title>
          <LeftCloud src={trailerCloudLeft} alt='Idle Cloud 1' />
          <CenterCloud src={farmingCloudLeft} alt='Idle Cloud 2' />
          <RightCloud src={idleCloud2} alt='Idle Cloud 2' />
          <SecondCenterCloud src={trailerCloudLeft} alt='Idle Cloud 2' />
          <SecondLeftCloud src={customizationCloudRight} alt='Idle Cloud 2' />
          <SecondRightCloud src={trailerCloudLeft} alt='Idle Cloud 2' />
          <ThirdRightCloud src={advantageCloud1} alt='Idle Cloud 2' />
          <h2>Game Roadmap</h2>
        </Title>
        <CardContainer>
          {roadMaps.map((item, idx) => {
            return (
              <Card key={idx}>
                <CardContent>
                  <LeftTextContainer>
                    <LeftText>{item.data}</LeftText>
                    <CenterText>{item.title}</CenterText>
                  </LeftTextContainer>
                  <RightText>{item.info}</RightText>
                </CardContent>
              </Card>
            );
          })}
        </CardContainer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '22px 0',
  marginTop: '20px',

  '@media screen and (max-width:1200px)': {
    padding: '32px 20px 85px 20px',
  },

  '@media screen and (max-width:768px)': {
    padding: '32px 20px 48px 20px',
  },
}));

const Content = styled.div({
  maxWidth: '1280px',
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '80px',
  padding: '20px',

  '@media screen and (max-width:1200px)': {
    gap: '24px',
    padding: '0px',
  },
});

const Title = styled.div(({ theme }) => ({
  position: 'relative',

  '& h2': {
    fontFamily: 'Octopus Bold Inline' || theme?.fontFamily,
    fontSize: '64px',
    fontWeight: 400,
    lineHeight: '51px',
    letterSpacing: '0em',
    textAlign: 'center',
    color: 'rgba(167, 76, 71, 1)',
    zIndex: 2,
    position: 'relative',
  },

  '@media screen and (max-width:1200px)': {
    '& h2': {
      textAlign: 'left',
    },
  },

  '@media screen and (max-width:768px)': {
    '& h2': {
      fontSize: '40px',
      lineHeight: '32px',
    },
  },
}));

const CardContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '45px',

  '@media screen and (max-width:1200px)': {
    gap: '24px',
  },
});

const Card = styled.div({
  position: 'relative',
  width: '100%',
  borderRadius: '20px',
  background: '#E9F1EE',
  height: '240px',
  zIndex: '1',

  '@media screen and (max-width: 1200px)': {
    height: 'auto',
  },

  '::before': {
    content: '""',
    position: 'absolute',
    top: '-8px',
    left: '-8px',
    right: '-8px',
    bottom: '-8px',
    border: '8px solid rgba(167, 76, 71, 0.16)',
    borderRadius: '28px',
    zIndex: '0',
    pointerEvents: 'none',
  },
});

const CardContent = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '42px',
  justifyContent: 'space-between',
  zIndex: '1',

  '@media screen and (max-width:1200px)': {
    flexDirection: 'column' || theme?.flexDirection,
    alignItems: 'flex-start',
    padding: '24px',
  },
}));

const LeftTextContainer = styled.div(({ theme }) => ({
  display: 'flex',

  '@media screen and (max-width:1200px)': {
    flexDirection: 'column' || theme?.flexDirection,
  },
}));

const LeftText = styled.div(() => ({
  color: 'rgba(167, 76, 71, 0.48)',
  fontFamily: 'Octopus Bold Inline',
  fontSize: '64px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '80%',
  width: '200px',

  '@media screen and (max-width:768px)': {
    fontSize: '40px',
    lineHeight: '32px',
  },
}));

const CenterText = styled.div(() => ({
  color: 'rgba(167, 76, 71, 1)',
  fontFamily: 'Octopus Bold Inline',
  fontSize: '64px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '80%',
  maxWidth: '552px',

  '@media screen and (max-width:1200px)': {
    maxWidth: '100%',
  },

  '@media screen and (max-width:775px)': {
    fontSize: '40px',
    lineHeight: '32px',
  },
}));

const RightText = styled.div(() => ({
  color: 'rgba(72, 55, 47, 1)',
  fontFamily: 'Josefin Sans',
  fontSize: '20px;',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '128%',
  maxWidth: '340px',

  '@media screen and (max-width:1200px)': {
    marginTop: '12px',
    maxWidth: '100%',
  },

  '@media screen and (max-width:1000px)': {
    fontSize: '16px',
    lineHeight: '20px',
  },
}));

const LeftCloud = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  left: '-320px',
  top: '-100px',

  '@media screen and (max-width:1000px)': {
    width: '430px',
    height: '278px',
    left: '-390px',
    top: '-160px',
  },
}));

const SecondLeftCloud = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  left: '-425px',
  top: '1650px',
  width: '613px',
  height: '311px',

  '@media screen and (max-width:1000px)': {
    left: '-360px',
    top: '1565px',
  },

  '@media screen and (max-width:400px)': {
    left: '-360px',
    top: '1420px',
  },
}));

const CenterCloud = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  left: '450px',
  top: '250px',

  '@media screen and (max-width:1000px)': {
    display: 'none',
  },
}));

const RightCloud = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  right: '-250px',
  top: '790px',
  width: '560px',
  height: '297px',

  '@media screen and (max-width:1000px)': {
    right: '-290px',
    top: '840px',
  },

  '@media screen and (max-width:400px)': {
    right: '-290px',
    top: '765px',
  },
}));

const SecondRightCloud = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  right: '-365px',
  top: '1790px',
  width: '378px',
  height: '228px',

  '@media screen and (max-width:1000px)': {
    display: 'none',
  },
}));

const ThirdRightCloud = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  right: '-205px',
  top: '2370px',
  width: '544px',
  height: '368px',

  '@media screen and (max-width:1000px)': {
    right: '-345px',
    top: '1320px',
  },

  '@media screen and (max-width:400px)': {
    right: '-345px',
    top: '2115px',
  },
}));

const SecondCenterCloud = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  left: '460px',
  top: '1154px',
  width: '287px',
  height: '172px',

  '@media screen and (max-width:1000px)': {
    display: 'none',
  },
}));
