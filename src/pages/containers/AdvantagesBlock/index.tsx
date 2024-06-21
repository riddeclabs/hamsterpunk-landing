import React from 'react';

import styled from 'styled-components';

import {
  advantage1,
  advantage2,
  advantage3,
  advantageCloud1,
  advantageCloud2,
} from '../../../assets/images';

export const AdvantagesBlock = () => {
  return (
    <Wrapper>
      <Content>
        <AdvantageItem>
          <LeftCloud src={advantageCloud1} alt='cloud' />
          <Title>
            Comfy
            <br />
            and Lovely
          </Title>
          <Description>
            Immerse yourself in the adorable world of plushy hamsters and build
            your cozy steampunk-styled settlement on a floating island.
          </Description>
          <Image src={advantage1} alt='advantage' />
        </AdvantageItem>
        <AdvantageItem>
          <Title>
            Relax
            <br />
            and Idle
          </Title>
          <Description>
            Embark on a peaceful adventure! Enjoy the easy to understand yet
            captivating gameplay, tend your farms and hamsters.
          </Description>
          <Image src={advantage2} alt='advantage' />
        </AdvantageItem>
        <AdvantageItem>
          <RightCloud src={advantageCloud2} alt='cloud' />

          <Title>
            Choose
            <br />
            Your Way
          </Title>
          <Description>
            Lead and govern your hamster town the way you like, shape its
            history with your decisions and give it the look and feel you like!
          </Description>
          <Image src={advantage3} alt='advantage' />
        </AdvantageItem>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  width: '100%' || theme?.width,
  padding: '176px 80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@media screen and (max-width:1130px)': {
    padding: '48px 20px',
  },
}));

const Content = styled.div(({ theme }) => ({
  display: 'flex' || theme?.display,
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '100px',
  maxWidth: '1280px',

  '@media screen and (max-width:1130px)': {
    gap: '48px',
  },

  '@media screen and (max-width:768px)': {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}));

const AdvantageItem = styled.div(({ theme }) => ({
  display: 'flex' || theme?.display,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'column',
  position: 'relative',

  '@media screen and (max-width:768px)': {
    maxWidth: '335px',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}));

const Title = styled.div(({ theme }) => ({
  fontFamily: 'Octopus Bold Inline' || theme?.fontFamily,
  fontSize: '64px',
  fontWeight: '400',
  lineHeight: '51px',
  textAlign: 'left',
  color: 'rgba(167, 76, 71, 1)',
  zIndex: 1,
  position: 'relative',

  '@media screen and (max-width:1130px)': {
    fontSize: '38px',
    lineHeight: '32px',
  },

  '@media screen and (max-width:768px)': {
    textAlign: 'center',
  },
}));

const Description = styled.div(({ theme }) => ({
  fontFamily: 'Josefin Sans' || theme?.fontFamily,
  fontSize: '20px',
  fontWeight: '400',
  lineHeight: '25.6px',
  textAlign: 'left',
  color: 'rgba(72, 55, 47, 1)',
  margin: '20px 0 40px 0',
  zIndex: 1,
  position: 'relative',

  '@media screen and (max-width:1130px)': {
    fontSize: '15px',
    lineHeight: '21px',
    margin: '12px 0 0 0',
  },

  '@media screen and (max-width:768px)': {
    textAlign: 'center',
  },
}));

const Image = styled.img(({ theme }) => ({
  margin: '0 auto' || theme?.margin,

  '@media screen and (max-width:1130px)': {
    width: '156px',
  },
}));

const LeftCloud = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  zIndex: 0,
  left: '-200px',
  top: '-134px',

  '@media screen and (max-width:768px)': {
    width: '227px',
    left: '-120px',
    top: 'auto',
    bottom: '-120px',
  },
}));

const RightCloud = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,
  zIndex: 0,
  right: '-175px',
  top: '120px',

  '@media screen and (max-width:768px)': {
    width: '251px',
    right: '-120px',
    top: '-108px',
  },
}));
