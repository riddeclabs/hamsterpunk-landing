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
}));

const Content = styled.div(() => ({
  maxWidth: '1280px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
}));

const LeftDirigibleWrapper = styled.div(({ theme }) => ({
  position: 'relative' || theme?.position,
  marginTop: '175px',
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
}));

const Title = styled.div(({ theme }) => ({
  fontFamily: 'Octopus Bold Inline' || theme?.fontFamily,
  fontSize: '64px',
  fontWeight: '400',
  lineHeight: '51px',
  letterSpacing: '0em',
  textAlign: 'left',
  color: 'rgba(167, 76, 71, 1)',
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
}));

const RightCloud = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  bottom: '150px',
  right: '-320px',
  zIndex: 0,
}));

const RightDirigibleWrapper = styled.div(({ theme }) => ({
  marginTop: '30px',
  position: 'relative' || theme?.position,
}));

const RightDirigible = styled.img(({ theme }) => ({
  position: 'relative' || theme?.position,
  zIndex: 1,
}));
