import React from 'react';

import styled from 'styled-components';

import {
  trailer1,
  trailerCloudLeft,
  trailerCloudRight,
  trailerLand,
} from '../../../assets/images';

export const VideoBlock = () => {
  return (
    <Wrapper>
      <Content>
        <Title>Trailer</Title>
        <Description>
          The finest hamsters of Hamsterpunk will show you the game in this
          reveal trailer.
        </Description>
        <Trailer>
          <ImgWrapper> </ImgWrapper>

          <CloudLeft src={trailerCloudLeft} />
          <Island src={trailerLand} />
          <CloudRight src={trailerCloudRight} />

          <Slide src={trailer1} />
        </Trailer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px 0 410px 0',

  '@media screen and (max-width:1130px)': {
    padding: '0 10% 275px',
  },

  '@media screen and (max-width:768px)': {
    padding: '32px 20px 215px 20px',
  },
}));

const Content = styled.div(({ theme }) => ({
  maxWidth: '872px',
  margin: '0 auto',
  display: 'flex' || theme?.display,
  flexDirection: 'column',
  alignItems: 'center',
}));

const Title = styled.div(({ theme }) => ({
  fontFamily: 'Octopus Bold Inline' || theme?.fontFamily,
  fontSize: '64px',
  fontWeight: '400',
  lineHeight: '51px',
  textAlign: 'center',
  color: 'rgba(167, 76, 71, 1)',

  '@media screen and (max-width:768px)': {
    fontSize: '40px',
    lineHeight: '32px',
  },
}));

const Description = styled.div(({ theme }) => ({
  fontFamily: 'Josefin Sans' || theme?.fontFamily,
  fontSize: '20px',
  fontWeight: '400',
  lineHeight: '25.6px',
  textAlign: 'center',
  margin: '20px 0 55px 0',
  color: 'rgba(72, 55, 47, 1)',

  '@media screen and (max-width:1130px)': {
    margin: '12px 0 56px 0',
  },

  '@media screen and (max-width:768px)': {
    fontSize: '16px',
    lineHeight: '21px',
  },
}));

const Trailer = styled.div(({ theme }) => ({
  maxWidth: '872px',
  width: '872px',
  padding: '22px',
  borderRadius: '32px',
  position: 'relative' || theme?.position,

  '@media screen and (max-width:1130px)': {
    width: '500px',
  },

  '@media screen and (max-width:768px)': {
    width: '280px',
  },
}));

const ImgWrapper = styled.div(({ theme }) => ({
  maxWidth: '872px',
  background: 'rgba(167, 76, 71, 0.16)',
  padding: '22px',
  borderRadius: '32px',
  position: 'absolute' || theme?.position,
  inset: '0px',
  zIndex: 1,
}));

const Slide = styled.img(({ theme }) => ({
  width: '100%',
  position: 'relative' || theme?.position,
  zIndex: 1,
}));

const CloudLeft = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  left: '-350px',
  top: '-50px',

  '@media screen and (max-width:1130px)': {
    width: '258px',
    top: '-180px',
    left: '-180px',
  },
}));

const CloudRight = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  right: '-76%',
  top: '426px',

  '@media screen and (max-width:1130px)': {
    maxWidth: '299px',
    top: 'auto',
    bottom: '-170px',
    right: '-150px',
  },

  '@media screen and (max-width:768px)': {
    bottom: '-136px',
    right: '-155px',
  },
}));

const Island = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  left: '-320px',
  top: '220px',

  '@media screen and (max-width:1130px)': {
    maxWidth: '768px',
    top: '78px',
    left: '-138px',
  },

  '@media screen and (max-width:768px)': {
    maxWidth: '470px',
    top: '61px',
    left: '-95px',
  },
}));
