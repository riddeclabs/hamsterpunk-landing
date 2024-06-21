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
          href='https://x.com/hamsterpunkgamee'
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
  backgroundImage: `url(${mainBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center top -170px',
  backgroundRepeat: 'no-repeat',

  '@media screen and (max-width:2000px)': {
    backgroundPosition: '100% 100%',
  },

  '@media screen and (max-width:1130px)': {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    zIndex: 1,
    height: '80dvh',
  },

  '@media screen and (max-width:800px)': {
    backgroundImage: `url(${mobileMainBg})`,
    backgroundPosition: 'center',
    height: '60dvh',
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
    top: '62px',
    '& img': {
      maxWidth: '152px',
      maxHeight: '136px',
    },
  },
  alignItems: 'center',
  gap: '24px',
}));
