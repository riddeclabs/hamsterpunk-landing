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

  ...customStyles,
}));
