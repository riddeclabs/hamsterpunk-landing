import React from 'react';

import styled from 'styled-components';

import {
  instaWhite,
  logo,
  tiktokWhite,
  xIconWhite,
  youtubeIconWhite,
} from '../../../assets/images';

export const BottomFooter = () => {
  return (
    <Wrapper>
      <Content>
        <TermsAndSocialContainer>
          <MobileTermsContainer>
            <Text>Terms and Conditions</Text>
            <Text>Privacy and Cookie policy</Text>
          </MobileTermsContainer>

          <MobileSocialBlock>
            <a
              href='https://www.youtube.com/channel/UCv2Je1vQ_C-f1Sgp4bna9FA'
              target='_blank'
              rel='noreferrer'
            >
              <img src={youtubeIconWhite} alt='Youtube' />
            </a>
            <a
              href='https://www.instagram.com/hamsterpunkgame/'
              target='_blank'
              rel='noreferrer'
            >
              <img src={instaWhite} alt='Instagramm' />
            </a>

            <a
              href='https://www.tiktok.com/@hamsterpunkgame'
              target='_blank'
              rel='noreferrer'
            >
              <img src={tiktokWhite} alt='TikTok' />
            </a>

            <a
              href='https://www.tiktok.com/@hamsterpunkgame'
              target='_blank'
              rel='noreferrer'
            >
              <img src={xIconWhite} alt='TikTok' />
            </a>
          </MobileSocialBlock>
        </TermsAndSocialContainer>
        <Bar />
        <BottomContent>
          <Logo src={logo} alt='Logo' />
          <TermsContainer>
            <Text>Terms and Conditions</Text>
            <Text>Privacy and Cookie policy</Text>
          </TermsContainer>
          <SocialBlock>
            <a
              href='https://www.youtube.com/channel/UCv2Je1vQ_C-f1Sgp4bna9FA'
              target='_blank'
              rel='noreferrer'
            >
              <img src={youtubeIconWhite} alt='Youtube' />
            </a>
            <a
              href='https://www.instagram.com/hamsterpunkgame/'
              target='_blank'
              rel='noreferrer'
            >
              <img src={instaWhite} alt='Instagramm' />
            </a>

            <a
              href='https://www.tiktok.com/@hamsterpunkgame'
              target='_blank'
              rel='noreferrer'
            >
              <img src={tiktokWhite} alt='TikTok' />
            </a>

            <a
              href='https://x.com/hamsterpunkgame'
              target='_blank'
              rel='noreferrer'
            >
              <img src={xIconWhite} alt='TikTok' />
            </a>
          </SocialBlock>
          <RiddecMark>2023 Riddec. All rights reserved</RiddecMark>
        </BottomContent>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '14px',
});

const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

const Bar = styled.div({
  width: '90vw',
  maxWidth: '1280px',
  border: '2px solid rgba(72, 55, 47, 0.24)',
});

const BottomContent = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Logo = styled.img({
  width: '80px',
  height: '42px',
});

const TermsContainer = styled.div({
  display: 'flex',
  visibility: 'hidden',
  gap: '40px',
  '@media screen and (max-width:995px)': {
    display: 'none',
  },
});

const MobileTermsContainer = styled.div({
  display: 'none',
  visibility: 'hidden',
  gap: '40px',
  '@media screen and (max-width:995px)': {
    display: 'flex',
  },
});

const Text = styled.div({
  color: '#48372F',
  fontFamily: 'Josefin Sans',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
});

const SocialBlock = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  '@media screen and (max-width:995px)': {
    display: 'none',
  },
});

const MobileSocialBlock = styled.div({
  display: 'none',
  alignItems: 'center',
  gap: '24px',
  '@media screen and (max-width:995px)': {
    display: 'flex',
  },
});

const RiddecMark = styled.div({
  display: 'flex',
  color: 'rgba(72, 55, 47, 0.80)',
  textAlign: 'right',
  fontFamily: 'Josefin Sans',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
});

const TermsAndSocialContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '20px',
});
