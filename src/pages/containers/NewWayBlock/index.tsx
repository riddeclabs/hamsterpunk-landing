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

const Wrapper = styled.div(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '38px 0',
}));

const Content = styled.div(() => ({
  maxWidth: '1280px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
}));

const LeftDirigibleWrapper = styled.div(({ theme }) => ({
  position: 'relative' || theme?.position,
  marginBottom: '60px',
}));

const LeftDirigible = styled.img(({ theme }) => ({
  position: 'relative' || theme?.position,
  zIndex: 1,
}));

const LeftCloud = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  left: '-400px',
  top: '-200px',
}));

const TextWrapper = styled.div(({ theme }) => ({
  position: 'relative' || theme?.position,
  maxWidth: '459px',
  margin: '0 78px 210px 122px' || theme?.margin,
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

const DescriptionWrapper = styled.div(() => ({
  marginTop: '24px',
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
}));

const DescriptionCloud = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  bottom: '-100px',
  right: 0,
  zIndex: 0,
}));

const RightDirigible = styled.img(() => ({}));
