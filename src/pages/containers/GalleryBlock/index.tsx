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

export const GalleryBlock = () => {
  return (
    <Content customStyles={{ paddingTop: 230 }}>
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
  marginTop: '52px',
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr',
  gridGap: '20px',
  '& .firstHamsterImage': {
    gridRowStart: 1,
    gridRowEnd: 3,
  },
}));
