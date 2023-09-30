import React from 'react';

import styled from 'styled-components';

import {
  farmingCloudLeft,
  farmingCloudRight,
  farmingDirigibleLeft,
  farmingDirigibleRight,
} from '../../../assets/images';

export const FarmingBlock = () => {
  return (
    <Wrapper>
      <Content>
        <BigDirigible src={farmingDirigibleLeft} />
        <TextBlockWrapper>
          <TextBlock>
            <Title>Farming</Title>
            <Description style={{ maxWidth: '443px' }}>
              A farm is the heart of your settlement! Take care of watering,
              planting, growing and harvesting crops with your cute hamster
              helpers to make your settlement prosper. Enjoy the variety of the
              plants you can grow and manifold options to spend the earned hard
              coin!
            </Description>
          </TextBlock>

          <TextBlock>
            <LeftCloud src={farmingCloudLeft} />

            <Title>Lazy hamsters and Managers</Title>
            <Description style={{ maxWidth: '403px' }}>
              Supervise the hamsters, who may sometimes get lazy - speed up
              their work with a touch of your finger. Or even hire a new manager
              to overlook the works!
            </Description>
          </TextBlock>
        </TextBlockWrapper>
        <SmallDirigibleWrapper>
          <RightCloud src={farmingCloudRight} />
          <SmallDirigible src={farmingDirigibleRight} />
        </SmallDirigibleWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 0 27px 0',
}));

const Content = styled.div(() => ({
  maxWidth: '1280px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '40px',
}));

const BigDirigible = styled.img(({ theme }) => ({
  marginBottom: '54px',
  position: 'relative' || theme?.position,
  zIndex: 1,
}));

const TextBlockWrapper = styled.div(({ theme }) => ({
  display: 'flex' || theme?.display,
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '108px',
  marginTop: '146px',
}));

const TextBlock = styled.div(({ theme }) => ({
  maxWidth: '466px',
  position: 'relative' || theme?.position,
}));

const Title = styled.div(({ theme }) => ({
  fontFamily: 'Octopus Bold Inline' || theme?.fontFamily,
  fontSize: '64px',
  fontWeight: 400,
  lineHeight: '51px',
  letterSpacing: '0em',
  textAlign: 'left',
  color: 'rgba(167, 76, 71, 1)',
  position: 'relative',
  zIndex: 1,
}));

const Description = styled.div(({ theme }) => ({
  fontFamily: 'Josefin Sans' || theme?.fontFamily,
  fontSize: '20px',
  fontWeight: 400,
  lineHeight: '',
  letterSpacing: '0px',
  textAlign: 'left',
  marginTop: '24px',
  color: 'rgba(72, 55, 47, 1)',
  position: 'relative',
  zIndex: 1,
}));

const SmallDirigibleWrapper = styled.div(({ theme }) => ({
  position: 'relative' || theme?.position,
  alignSelf: 'flex-end',
}));

const SmallDirigible = styled.img(() => ({}));

const LeftCloud = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  left: '-194px',
  bottom: '18px',
}));

const RightCloud = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  top: '-246px',
  right: '-246px',
}));
