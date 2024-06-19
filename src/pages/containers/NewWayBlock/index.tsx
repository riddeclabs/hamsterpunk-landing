import React from 'react';

import styled from 'styled-components';

import {
  idleCloud1,
  idleCloud2,
  idleDirigibleBig,
  idleDirigibleSmall,
} from '../../../assets/images';

export const NewWayBlock = () => {
  return (
    <Wrapper>
      <Content>
        <LeftDirigibleWrapper>
          <LeftDirigible src={idleDirigibleSmall} alt='Left Dirible Idle' />
          <LeftCloud src={idleCloud1} alt='Idle Cloud 1' />
        </LeftDirigibleWrapper>
        <LeftCloudMobile src={idleCloud1} alt='Idle Cloud 1' />

        <TextWrapper>
          <Title>Idle in the skies!</Title>
          <DescriptionWrapper>
            <Description>
              Hamsterpunk is an ultimate idle farming game with cute and curious
              hamsters to command, manifold structures to build, upgrades to
              unlock and rewards to get. Build your settlement cozy and cute and
              make it thrive across infinite flying islands in this
              steampunk-styled adventure.
            </Description>
            <DescriptionCloud alt='Idle Cloud 2' src={idleCloud2} />
          </DescriptionWrapper>
        </TextWrapper>
        <RightDirigible src={idleDirigibleBig} alt='Right Dirigible Idle' />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '38px 0',
  position: 'relative' || theme?.position,

  '@media screen and (max-width:1130px)': {
    padding: '32px 20px',
  },
}));

const Content = styled.div(({ theme }) => ({
  maxWidth: '1280px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',

  '@media screen and (max-width:1130px)': {
    alignItems: 'flex-start',
  },

  '@media screen and (max-width:768px)': {
    flexDirection: 'column' || theme?.flexDirection,
    width: '100%',
  },
}));

const LeftDirigibleWrapper = styled.div(({ theme }) => ({
  position: 'relative' || theme?.position,
  marginBottom: '60px',

  '@media screen and (max-width:1130px)': {
    display: 'none',
  },
}));

const LeftDirigible = styled.img(({ theme }) => ({
  position: 'relative' || theme?.position,
  zIndex: 1,
}));

const LeftCloudMobile = styled.img(({ theme }) => ({
  display: 'none',

  '@media screen and (max-width:1130px)': {
    position: 'absolute' || theme?.position,
    left: '-30px',
    top: '-130px',
    display: 'block',
    width: '405px',
  },
}));

const LeftCloud = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  left: '-400px',
  top: '-175px',
  '@media screen and (max-width:1600px)': {
    top: '-200px',
  },
}));

const TextWrapper = styled.div(({ theme }) => ({
  position: 'relative' || theme?.position,
  maxWidth: '459px',
  margin: '0 78px 210px 122px' || theme?.margin,

  '@media screen and (max-width:1130px)': {
    margin: 0,
  },
}));

const Title = styled.div(({ theme }) => ({
  fontFamily: 'Octopus Bold Inline' || theme?.fontFamily,
  fontSize: '64px',
  fontWeight: '400',
  lineHeight: '51px',
  letterSpacing: '0em',
  textAlign: 'left',
  color: 'rgba(167, 76, 71, 1)',

  '@media screen and (max-width:768px)': {
    fontSize: '40px',
    lineHeight: '32px',
  },
}));

const DescriptionWrapper = styled.div(() => ({
  marginTop: '24px',

  '@media screen and (max-width:768px)': {
    marginTop: '12px',
  },
}));

const Description = styled.div(({ theme }) => ({
  fontFamily: 'Josefin Sans' || theme?.fontFamily,
  fontSize: '20px',
  fontWeight: '400',
  lineHeight: '26px',
  letterSpacing: '0px',
  textAlign: 'left',
  position: 'relative',
  zIndex: 1,

  '@media screen and (max-width:768px)': {
    fontSize: '16px',
    lineHeight: '21px',
  },
}));

const DescriptionCloud = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  bottom: '-100px',
  right: 0,
  zIndex: 0,

  '@media screen and (max-width:1130px)': {
    width: '177px',
    left: 0,
    top: '220px',
  },

  '@media screen and (max-width:768px)': {
    top: '420px',
  },
}));

const RightDirigible = styled.img(({ theme }) => ({
  '@media screen and (max-width:1130px)': {
    width: '270px',
  },

  '@media screen and (max-width:768px)': {
    alignSelf: 'flex-end',
    width: '239px' || theme?.width,
    marginTop: '8px',
  },
}));
