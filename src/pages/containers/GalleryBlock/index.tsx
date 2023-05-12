import React from 'react';

import styled from 'styled-components';

import {
  hamster1,
  hamster2,
  hamster3,
  hamster4,
  hamster5,
} from '../../../assets/images';
import { Content } from '../../../components/Content';
import { Typography } from '../../../components/Typography';
import { colors } from '../../../constants/variables';
import { useMediaValue } from '../../../utils/commonFunctions';

export const GalleryBlock = () => {
  return (
    <Content
      customStyles={{ paddingTop: useMediaValue(100, 110, 120, 230) }}
      id='details'
    >
      <Typography
        variant='title'
        text='Hamsters'
        color={colors.black}
        textAlign='center'
      />
      <Text>
        <Typography
          text={
            'Meet the cute, curious and a bit lazy hamsters of Hamsterpunk. Help them to harvest crops, gather resources, expand and prosper.'
          }
          variant='text'
          color={colors.black}
        />
      </Text>

      <Gallery>
        <img
          className='firstHamsterImage'
          alt='Main HamsterPunk Hero'
          src={hamster1}
        />
        <img alt='Hamster Hero' src={hamster2} />
        <img alt='Hamster Hero' src={hamster3} />
        <img alt='Hamster Hero' src={hamster4} />
        <img alt='Hamster Hero' src={hamster5} />
      </Gallery>
    </Content>
  );
};

const Text = styled.div(({ theme }) => ({
  margin: '52px auto 0',
  textAlign: 'center' || theme?.center,
  width: '598px',

  '@media screen and (max-width:1439px)': {
    margin: '42px auto 0',
  },

  '@media screen and (max-width:1023px)': {
    margin: '32px auto 0',
  },

  '@media screen and (max-width:768px)': {
    margin: '24px auto 0',
    width: '398px',
    maxWidth: '100%',
  },
}));

const Gallery = styled.div(() => ({
  marginTop: '52px',
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr',
  gridTemplateRows: 'auto',
  gridGap: '20px',
  justifyContent: 'center',

  '@media screen and (max-width:1439px)': {
    marginTop: '36px',
    gridTemplateColumns: '313px 313px',
    gridTemplateRows: '646px 313px 313px',
  },

  '@media screen and (max-width:1023px)': {
    marginTop: '36px',
    gridTemplateColumns: '313px 313px',
    gridTemplateRows: '646px 313px 313px',
  },

  '@media screen and (max-width:768px)': {
    marginTop: '24px',
    gridTemplateColumns: '164px 164px',
    gridTemplateRows: '343px 164px 164px',
    gridGap: '15px',
  },

  '& >img': {
    maxWidth: '313px',

    '@media screen and (max-width:768px)': {
      maxWidth: '164px',
    },
  },

  '& .firstHamsterImage': {
    maxWidth: '646px',

    gridRowStart: 1,
    gridRowEnd: 3,
    gridColumnStart: 'auto',
    gridColumnEnd: 'auto',

    '@media screen and (max-width:1439px)': {
      gridRowEnd: 2,
      gridColumnStart: 1,
      gridColumnEnd: 3,
    },

    '@media screen and (max-width:768px)': {
      maxWidth: '343px',
    },
  },
}));
