import React from 'react';

import styled from 'styled-components';

import { crossImage, newWayImage } from '../../../assets/images';
import { Content } from '../../../components/Content';
import { Typography } from '../../../components/Typography';
import { colors } from '../../../constants/variables';

export const NewWayBlock = () => {
  return (
    <Wrapper>
      <Content>
        <PositionContainer>
          <div className='textBlockWrapper'>
            <Tittle>
              <Typography
                text={'Play to earn. Play to learn.'}
                variant='title'
              />
            </Tittle>

            <CommonTextBlock>
              <CrossImage alt='cross' src={crossImage} />
              <CommonText>
                <Typography
                  text={
                    'Hamsterpunk is an ultimate idle farming game with cute and curious hamsters to command, manifold structures to build, upgrades to unlock and rewards to get. Join Hamsterville to make it thrive, to learn and earn crypto.'
                  }
                  variant='text'
                />
              </CommonText>
            </CommonTextBlock>
          </div>
          <NewWayImage alt='New Way HamsterPunk' src={newWayImage} />
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

  '@media screen and (max-width:1439px)': {
    width: '332px',
  },

  '@media screen and (max-width:1024px)': {
    width: 'auto',
    textAlign: 'center',
  },
}));

const CrossImage = styled.img(() => ({
  '@media screen and (max-width:1024px)': {
    width: '50px',
  },

  '@media screen and (max-width:768px)': {
    width: '37px',
  },
}));
const NewWayImage = styled.img(() => ({
  '@media screen and (max-width:1439px)': {
    maxWidth: '50%',
  },

  '@media screen and (max-width:1024px)': {
    maxWidth: '75%',
  },

  '@media screen and (max-width:768px)': {
    maxWidth: '100%',
  },
}));

const CommonTextBlock = styled.div(({ theme }) => ({
  width: '523px',
  marginTop: '176px',

  '@media screen and (max-width:1439px)': {
    width: 'auto',
    marginTop: '112px',
  },

  '@media screen and (max-width:1024px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center' || theme?.align,
    textAlign: 'center',
    marginTop: '60px',
  },

  '@media screen and (max-width:768px)': {
    marginTop: '31px',
  },
}));

const CommonText = styled.div(() => ({
  fontFamily: 'Josefin Sans',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '26px',
  lineHeight: '134.52%',
  color: colors.mainText,
  marginTop: '31px',

  '@media screen and (max-width:1024px)': {
    marginTop: '16px',
  },

  '@media screen and (max-width:768px)': {
    marginTop: '14px',
  },
}));

const PositionContainer = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',

  '@media screen and (max-width:1439px)': {
    gap: '40px',
  },

  '@media screen and (max-width:1024px)': {
    flexDirection: 'column' || theme?.direction,
    alignItems: 'center',
    gap: '20px',
  },

  '@media screen and (max-width:768px)': {
    gap: '18px',
  },

  '& > .textBlockWrapper': {
    '@media screen and (max-width:1439px)': {
      maxWidth: '50%',
    },
    '@media screen and (max-width:1024px)': {
      maxWidth: '100%',
    },
  },
}));

const Wrapper = styled.div(() => ({
  background: colors.grayBackground,
  marginTop: '132px',

  '@media screen and (max-width:1439px)': {
    marginTop: '64px',
  },

  '@media screen and (max-width:1024px)': {
    marginTop: '46px',
  },

  '@media screen and (max-width:768px)': {
    marginTop: '24px',
  },
}));
