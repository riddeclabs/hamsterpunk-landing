import React from 'react';

import styled from 'styled-components';

import { progressImage } from '../../../assets/images';
import { Content } from '../../../components/Content';
import { Typography } from '../../../components/Typography';
import { colors } from '../../../constants/variables';

export const ProgressBlock = () => {
  return (
    <Block>
      <Content>
        <Wrapper>
          <Typography
            text='Expand and progress'
            variant='title'
            color={colors.black}
          />
          <Text>
            <Typography
              color={colors.black}
              text='Lots of bright hamsters live in Hamsterville. Help them invent new tools and explore technologies to increase production of resources.
'
              lineHeight={'32px'}
              fontSize={'24px'}
              variant='text'
            />
          </Text>

          <ProgressImage alt='progress' src={progressImage} />
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
