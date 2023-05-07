import React from 'react';

import styled from 'styled-components';

import {
  HamsterPunkText,
  // RiddecCreated,
  RiddecCreatedMobile,
  androidIcon,
  intersect,
  iosIcon,
  mainImage,
} from '../../../assets/images';
import { colors } from '../../../constants/variables';
// import { useMobile } from '../../../utils/commonFunctions';

export const MainBlock = () => {
  // const isMobile = useMobile();
  return (
    <Wrapper>
      <TextBlock>
        <HamsterPunkTextStyled />
        <h2>Play to earn idle game that teaches crypto.</h2>
      </TextBlock>
      <BottomBlock>
        <DevelopersBlock>
          <AppIcons>
            <img alt='android app' src={androidIcon} />
            <img alt='ios app' src={iosIcon} />
          </AppIcons>

          {/* {isMobile ? <RiddecCreatedMobile /> : <RiddecCreated />} */}
          <RiddecCreatedMobile />
        </DevelopersBlock>
        <Intersect />
      </BottomBlock>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  width: '100%' || theme?.width,
  height: '100vh',
  background: `url(${mainImage})`,
  backgroundSize: 'cover',
  position: 'relative',

  '@media screen and (max-width:768px)': {
    height: '580px',
    backgroundPosition: 'center',
  },
}));

const TextBlock = styled.div(({ theme }) => ({
  width: '100%' || theme?.width,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '& >h2': {
    fontSize: '24px',
    lineHeight: '24px',
    fontWeight: 700,
    color: colors.white,
    marginTop: '10px',
    textTransform: 'uppercase',
    textAlign: 'center',
    maxWidth: '90%',

    '@media screen and (max-width:768px)': {
      fontSize: '16px',
      lineHeight: '16px',
      marginTop: '-20px',
    },

    '@media screen and (max-width:600px)': {
      fontSize: '8px',
      lineHeight: '8px',
      marginTop: '-40px',
    },
  },
}));

const BottomBlock = styled.div(({ theme }) => ({
  position: 'absolute' || theme?.position,
  bottom: '-2px',
  left: 0,
  right: 0,
}));

const Intersect = styled.div(() => ({
  width: '100%',
  height: '86px',
  background: `url(${intersect})`,
  backgroundSize: 'cover',
}));

const HamsterPunkTextStyled = styled(HamsterPunkText)(() => ({
  maxWidth: '90%',

  '@media screen and (max-width:768px)': {
    marginTop: '-100px',
  },
}));

const DevelopersBlock = styled.div(() => ({
  maxWidth: '1312px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '57px',

  '@media screen and (max-width:1439px)': {
    maxWidth: '90%',
  },
}));

const AppIcons = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',

  '>img': {
    cursor: 'pointer',

    '@media screen and (max-width:768px)': {
      width: '24px',
    },
  },
}));
