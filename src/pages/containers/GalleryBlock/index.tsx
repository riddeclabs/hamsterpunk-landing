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
    <Content customStyles={{ paddingTop: useMediaValue(100, 110, 120, 230) }}>
      <Typography
        variant='title'
        text='Hamsters'
        color={colors.black}
        textAlign='center'
      />
      <Gallery>
        <img className='firstHamsterImage' alt='hamster' src={hamster1} />
        <img alt='hamster' src={hamster2} />
        <img alt='hamster' src={hamster3} />
        <img alt='hamster' src={hamster4} />
        <img alt='hamster' src={hamster5} />
      </Gallery>
    </Content>
  );
};

const Gallery = styled.div(() => ({
  marginTop: useMediaValue('24px', '36px', '36px', '52px'),
  display: 'grid',
  gridTemplateColumns: useMediaValue(
    '164px 164px',
    '313px 313px',
    '313px 313px',
    '2fr 1fr 1fr'
  ),
  gridTemplateRows: useMediaValue(
    '343px 164px 164px',
    '646px 313px 313px',
    '646px 313px 313px',
    'auto'
  ),
  justifyContent: 'center',
  gridGap: useMediaValue('15px', '20px', '20px', '20px'),
  '& .firstHamsterImage': {
    gridRowStart: 1,
    gridRowEnd: useMediaValue(2, 2, 2, 3),
    gridColumnStart: useMediaValue('1', '1', '1', 'auto'),
    gridColumnEnd: useMediaValue('3', '3', 'auto', 'auto'),
  },

  '& >img': {
    maxWidth: useMediaValue('100%', '100%', 'initial', 'initial'),
  },
}));
