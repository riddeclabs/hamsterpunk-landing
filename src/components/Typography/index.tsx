import React, { FC } from 'react';

import styled from 'styled-components';

import { colors } from '../../constants/variables';

type Props = {
  variant: 'title' | 'subtitle' | 'text';
  text: string;
};

export const Typography: FC<Props & React.CSSProperties> = ({
  variant,
  text,
  ...customStyles
}) => {
  return (
    <Text variant={variant} customStyles={customStyles}>
      {text}
    </Text>
  );
};

const Text = styled.p<{
  variant: 'title' | 'subtitle' | 'text';
  customStyles: React.CSSProperties;
}>(({ variant, customStyles }) => ({
  color: variant === 'text' ? colors.mainText : colors.titles,
  fontFamily: variant === 'text' ? 'Josefin Sans' : 'Titan One',
  fontSize: variant === 'text' ? '26px' : variant === 'title' ? '52px' : '30px',
  lineHeight:
    variant === 'text' ? '35px' : variant === 'title' ? '60px' : '34px',
  fontWeight: 400,

  '@media screen and (max-width:1439px)': {
    fontSize:
      variant === 'text' ? '20px' : variant === 'title' ? '40px' : '26px',
    lineHeight:
      variant === 'text' ? '30px' : variant === 'title' ? '50px' : '30px',
  },

  '@media screen and (max-width:1023x)': {
    fontSize:
      variant === 'text' ? '16px' : variant === 'title' ? '30px' : '20px',
    lineHeight:
      variant === 'text' ? '20px' : variant === 'title' ? '40px' : '24px',
  },

  '@media screen and (max-width:768px)': {
    fontSize:
      variant === 'text' ? '12px' : variant === 'title' ? '18px' : '14px',
    lineHeight:
      variant === 'text' ? '16px' : variant === 'title' ? '21px' : '16px',
  },

  ...customStyles,
}));
