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
}));

const Description = styled.div(({ theme }) => ({
  fontFamily: 'Josefin Sans' || theme?.fontFamily,
  fontSize: '20px',
  fontWeight: '400',
  lineHeight: '25.6px',
  textAlign: 'center',
  margin: '20px 0 55px 0',
  color: 'rgba(72, 55, 47, 1)',
}));

const Trailer = styled.div(({ theme }) => ({
  maxWidth: '872px',
  background: 'rgba(167, 76, 71, 0.16)',
  padding: '22px',
  borderRadius: '32px',
  position: 'relative' || theme?.position,
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
}));

const CloudRight = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  right: '-76%',
  top: '426px',
}));

const Island = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  left: '-320px',
  top: '220px',
}));
