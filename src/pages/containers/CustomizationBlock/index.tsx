import React from 'react';

import styled from 'styled-components';

import {
  customizationCloudLeft,
  customizationCloudRight,
  customizationDirigibleLeft,
  customizationDirigibleRight,
} from '../../../assets/images';

export const CustomizationBlock = () => {
  return (
    <Wrapper>
      <Content>
        <LeftDirigibleWrapper>
          <LeftDirigible
            src={customizationDirigibleLeft}
            alt='Left Dirible Idle'
          />
          <LeftCloud src={customizationCloudLeft} alt='Idle Cloud 1' />
        </LeftDirigibleWrapper>
        <TextWrapper>
          <Title>Settlement customisation</Title>
          <Description>
            Expand your settlement using a Grappling Hook to catch new islands
            and build bridges to them. Decorate the streets of your town with
            various items, from whimsical steampunk contraptions to charming
            natural wonders, allowing you to create a unique and personalised
            hamster haven.
          </Description>
        </TextWrapper>
        <RightDirigibleWrapper>
          <RightDirigible
            src={customizationDirigibleRight}
            alt='Right Dirigible Idle'
          />
          <RightCloud src={customizationCloudRight} alt='Idle Cloud 1' />
        </RightDirigibleWrapper>
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

  '@media screen and (max-width:1130px)': {
    padding: '32px 20px 85px 20px',
  },

  '@media screen and (max-width:768px)': {
    padding: '32px 20px 48px 20px',
  },
}));

const Content = styled.div(({ theme }) => ({
  maxWidth: '1280px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',

  '@media screen and (max-width:768px)': {
    flexDirection: 'column' || theme?.flexDirection,
    alignItems: 'flex-start',
    width: '100%',
  },
}));

const LeftDirigibleWrapper = styled.div(({ theme }) => ({
  position: 'relative' || theme?.position,
  marginTop: '175px',

  '@media screen and (max-width:1130px)': {
    display: 'none',
  },
}));

const LeftDirigible = styled.img(({ theme }) => ({
  position: 'relative' || theme?.position,
  zIndex: 1,
}));

const LeftCloud = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  left: '-260px',
  top: '-154px',
}));

const TextWrapper = styled.div(({ theme }) => ({
  position: 'relative' || theme?.position,
  maxWidth: '430px',
  margin: '302px 0px 0px 80px' || theme?.margin,

  '@media screen and (max-width:1130px)': {
    margin: 0,
  },

  '@media screen and (max-width:768px)': {
    maxWidth: '335px',
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

const Description = styled.div(({ theme }) => ({
  fontFamily: 'Josefin Sans' || theme?.fontFamily,
  fontSize: '20px',
  fontWeight: '400',
  lineHeight: '26px',
  letterSpacing: '0px',
  textAlign: 'left',
  position: 'relative',
  zIndex: 1,
  marginTop: '24px',

  '@media screen and (max-width:768px)': {
    fontSize: '16px',
    lineHeight: '21px',
    marginTop: '12px',
  },
}));

const RightCloud = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  bottom: '150px',
  right: '-320px',
  zIndex: 0,

  '@media screen and (max-width:768px)': {
    right: 'auto',
    width: '239px',
    left: '-130px',
    bottom: '116px',
  },
}));

const RightDirigibleWrapper = styled.div(({ theme }) => ({
  marginTop: '30px',
  position: 'relative' || theme?.position,

  '@media screen and (max-width:768px)': {
    alignSelf: 'flex-end',
  },
}));

const RightDirigible = styled.img(({ theme }) => ({
  position: 'relative' || theme?.position,
  zIndex: 1,

  '@media screen and (max-width:1130px)': {
    width: '242px',
  },
}));
