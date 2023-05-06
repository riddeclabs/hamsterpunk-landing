import React from 'react';

import styled from 'styled-components';

import { humstervilleImage } from '../../../assets/images';
import { Content } from '../../../components/Content';
import { Typography } from '../../../components/Typography';
import { colors } from '../../../constants/variables';

export const HumstervilleBlock = () => {
  return (
    <Block>
      <Content>
        <Wrapper>
          <Typography
            text='Hamsterville'
            variant='title'
            color={colors.black}
          />
          <Text>
            <Typography
              color={colors.black}
              text='Hamsterville is a small island, floating in the sky. Lead the exploration of new lands and expand the island to give your hamsters more space to live in.
'
              lineHeight={'32px'}
              fontSize={'24px'}
              variant='text'
            />
          </Text>

          <ProgressImage alt='progress' src={humstervilleImage} />
        </Wrapper>
      </Content>
    </Block>
  );
};

const Block = styled.div(() => ({
  marginTop: '180px',
}));

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column' || theme.column,
  alignItems: 'center',
  textAlign: 'center',
}));

const ProgressImage = styled.img(() => ({
  marginTop: '52px',
  maxWidth: '100%',
}));
const Text = styled.div(() => ({
  marginTop: '24px',
  maxWidth: '598px',
}));
