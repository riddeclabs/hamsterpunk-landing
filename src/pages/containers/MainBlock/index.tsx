import React from 'react';

import styled from 'styled-components';

import {
  appStore,
  instagrammIcon,
  logo,
  mainBg,
  playMarket,
  tiktokIcon,
  youtubeIcon,
} from '../../../assets/images';

export const MainBlock = () => {
  return (
    <Wrapper>
      <BGWrapper>
        {/* <BackgroundImage src={mainBg} alt='Background Image' /> */}
      </BGWrapper>
      <SocialBlock>
        <a
          href='https://www.youtube.com/channel/UCv2Je1vQ_C-f1Sgp4bna9FA'
          target='_blank'
          rel='noreferrer'
        >
          <img src={youtubeIcon} alt='Youtube' />
        </a>
        <a
          href='https://www.instagram.com/hamsterpunkgame/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={instagrammIcon} alt='Instagramm' />
        </a>

        <a
          href='https://www.tiktok.com/@hamsterpunkgame'
          target='_blank'
          rel='noreferrer'
        >
          <img src={tiktokIcon} alt='TikTok' />
        </a>
      </SocialBlock>
      <CentralBlock>
        <Logo src={logo} alt='Logo' />
        <Text>Relaxing farm game</Text>
        <MobileAppWrapper>
          <img src={appStore} alt='app store icon' />
          <img src={playMarket} alt='play market icon' />
        </MobileAppWrapper>
      </CentralBlock>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  width: '100%' || theme?.width,
  height: '100dvh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',

  '@media screen and (max-width:1130px)': {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    zIndex: 1,
  },
}));

const SocialBlock = styled.div(({ theme }) => ({
  position: 'absolute' || theme?.position,
  left: '80px',
  top: '98px',
  display: 'flex',
  alignItems: 'center',
  gap: '24px',

  '@media screen and (max-width:1130px)': {
    position: 'relative',
    left: 'auto',
    top: 'auto',
    marginTop: '64px',
  },

  '@media screen and (max-width:768px)': {
    '& img': {
      width: '40px',
    },
  },
}));

const CentralBlock = styled.div(({ theme }) => ({
  display: 'flex' || theme?.display,
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '400px',
  marginTop: '81px',
  position: 'relative',

  '@media screen and (max-width:1130px)': {
    position: 'relative',
    left: 'auto',
    top: 'auto',
    marginTop: '20px',
  },

  '@media screen and (max-width:768px)': {
    maxWidth: '286px',
  },
}));

const Logo = styled.img(({ theme }) => ({
  maxWidth: '100%' || theme?.maxWidth,
}));

const Text = styled.p(({ theme }) => ({
  fontFamily: 'Octopus Bold Inline',
  fontSize: '64px' || theme?.fontSize,
  fontWeight: 400,
  lineHeight: '52px',
  color: '#A74C47',
  margin: '12px 0 32px 0',
  textAlign: 'center',

  '@media screen and (max-width:1130px)': {
    margin: '0px 0 109px 0',
  },

  '@media screen and (max-width:768px)': {
    fontSize: '40px',
    lineHeight: '32px',
    maxWidth: '202px',
  },
}));

const MobileAppWrapper = styled.div(({ theme }) => ({
  display: 'flex' || theme?.display,
  width: '100%',
  alignItems: 'center',
  gap: '40px',
  justifyContent: 'center',

  '@media screen and (max-width:768px)': {
    gap: '24px',
    '& > img': {
      width: '118px',
    },
  },
}));

const BGWrapper = styled.div(({ theme }) => ({
  position: 'absolute' || theme?.position,
  left: 0,
  top: 0,
  zIndex: 0,
  width: '100%',
  height: '1404px',
  background: `url(${mainBg})`,
  backgroundPosition: 'center -504px',
  backgroundRepeat: 'no-repeat',
  // position: 'absolute' || theme?.position,
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // inset: '-318px -318px -504px -254px',

  '@media screen and (max-width:1130px)': {
    backgroundPosition: 'center',
    maxHeight: '100%',
    height: '100%',
  },
}));

// const BackgroundImage = styled.img(() => ({
//   // zIndex: 0,
//   // width: '1948px',
//   // height: '1722px',
//   // top: '-318px',
//   // left: '-254px',
// }));
