import React from 'react';

import styled from 'styled-components';

import { crossImage, newWayImage } from '../../../assets/images';
import { Content } from '../../../components/Content';
import { colors } from '../../../constants/variables';

export const NewWayBlock = () => {
  return (
    <Wrapper>
      <Content>
        <PositionContainer>
          <div>
            <Tittle>A new way of Crypto Game!</Tittle>

            <CommonTextBlock>
              <CrossImage alt='cross' src={crossImage} />
              <CommonText>
                Hamsterpunk is an ultimate idle farming game with cute and
                curious hamsters to command, manifold structures to build,
                upgrades to unlock and rewards to get. Join Hamsterville to make
                it thrive, to learn and earn crypto.
              </CommonText>
            </CommonTextBlock>
          </div>
          <NewWayImage alt='new-way' src={newWayImage} />
        </PositionContainer>
      </Content>
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

const CrossImage = styled.img(() => ({}));
const NewWayImage = styled.img(() => ({}));

const CommonTextBlock = styled.div(() => ({
  width: '523px',
  marginTop: '176px',
}));

const CommonText = styled.div(() => ({
  fontFamily: 'Josefin Sans',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '26px',
  lineHeight: '134.52%',
  color: colors.mainText,
  marginTop: '31px',
}));

const PositionContainer = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}));

const Wrapper = styled.div(() => ({
  background: colors.grayBackground,
  marginTop: '132px',
}));
