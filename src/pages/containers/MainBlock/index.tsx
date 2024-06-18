import React from 'react';

import styled from 'styled-components';

import {
  instagrammIcon,
  logo,
  mainBg,
  mobileMainBg,
  qrCode,
  tiktokIcon,
  xIcon,
  youtubeIcon,
} from '../../../assets/images';

export const MainBlock = () => {
  return (
    <Wrapper>
      <BGWrapper>
        <BackgroundImage src={mainBg} alt='Background' />
        <BackgroundImageSmall src={mobileMainBg} alt='Background Small' />
        <Overlay />
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

        <a
          href='https://www.tiktok.com/@hamsterpunkgame'
          target='_blank'
          rel='noreferrer'
        >
          <img src={xIcon} alt='TikTok' />
        </a>
      </SocialBlock>
      <CentralBlock>
        <Logo src={logo} alt='Logo' />
      </CentralBlock>

      <QrCode>
        <a href='https://t.me/HamsterpunkBot' target='_blank' rel='noreferrer'>
          <img src={qrCode} alt='qrCode' />
        </a>
      </QrCode>
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
    flexDirection: 'column',
    left: '20px',
  },

  '@media screen and (max-width:768px)': {
    top: '20px',
    '& img': {
      width: '40px',
    },
  },
}));

const CentralBlock = styled.div({
  position: 'absolute',
  right: '300px',
  top: '90px',

  '@media screen and (max-width:1130px)': {
    top: 'auto',
    maxWidth: '286px',
  },

  '@media screen and (max-width:840px)': {
    left: '50%',
    transform: 'translateX(-50%)',
    width: '286px',
    right: 'auto',
  },

  '@media screen and (max-width:768px)': {
    maxWidth: '154px',
    maxHeight: '86px',
  },
});

const Logo = styled.img(({ theme }) => ({
  maxWidth: '100%' || theme?.maxWidth,
}));

const QrCode = styled.div(({ theme }) => ({
  position: 'absolute' || theme?.position,
  right: '80px',
  top: '98px',
  display: 'flex',

  '@media screen and (max-width:1130px)': {
    right: '20px',
  },

  '@media screen and (max-width:768px)': {
    '& img': {
      maxWidth: '152px',
      maxHeight: '136px',
    },
  },
  alignItems: 'center',
  gap: '24px',
}));

const BGWrapper = styled.div(({ theme }) => ({
  position: 'absolute' || theme?.position,
  left: 0,
  top: 0,
  width: '100%',
  overflow: 'hidden',
}));

const BackgroundImage = styled.img({
  width: '100%',
  height: 'auto',
  maxHeight: '950px',
  minHeight: '530px',
  position: 'relative',

  '@media screen and (max-width:550px)': {
    display: 'none',
  },
});

const BackgroundImageSmall = styled.img({
  display: 'none',

  '@media screen and (max-width:550px)': {
    display: 'block',
    width: '100%',
    height: 'auto',
    maxHeight: '950px',
    minHeight: '530px',
    position: 'relative',
  },
});

const Overlay = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
});
