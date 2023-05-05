import React from 'react';

import styled from 'styled-components';

import crossImage from '../../../assets/images/crossImage.svg';
import newWeyImage from '../../../assets/images/newWayImage.png';
import { colors } from '../../../constants/variables';

export const NewWayBlock = () => {
  return (
    <Wrapper>
      <PositionContainer>
        <TextBlock>
          <Tittle>A new way of Crypto Game!</Tittle>
          <CommonTextBlock>
            <img alt='' src={crossImage} height={'82px'} />
            <CommonText>
              Hamsterpunk is an ultimate idle farming game with cute and curious
              hamsters to command, manifold structures to build, upgrades to
              unlock and rewards to get. Join Hamsterville to make it thrive, to
              learn and earn crypto.
            </CommonText>
          </CommonTextBlock>
        </TextBlock>
        <ImageBlock alt='' src={newWeyImage} />
      </PositionContainer>
    </Wrapper>
  );
};

const Tittle = styled.div(({ theme }) => ({
  width: '502px',
  fontFamily: 'Titan One',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '52px',
  lineHeight: '60px',
  letterSpacing: '0.04em',
  color: colors.titles,
  textTransform: theme?.capitalize || 'capitalize',
}));

const CommonTextBlock = styled.div(() => ({
  width: '523px',
}));

const CommonText = styled.div(() => ({
  fontFamily: 'Josefin Sans',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '26px',
  lineHeight: '134.52%',
  color: colors.beigeText,
  marginTop: '31px',
}));

const PositionContainer = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}));

const TextBlock = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: theme?.column || 'column',
}));

const ImageBlock = styled.img(() => ({
  height: '620px',
}));

const Wrapper = styled.div(() => ({
  background: colors.grayBackground,
  marginTop: '132px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
