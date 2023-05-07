import React from 'react';

import styled from 'styled-components';

import { intersect } from '../../../assets/images';
import { Content } from '../../../components/Content';
import { Typography } from '../../../components/Typography';
import { useMediaValue } from '../../../utils/commonFunctions';

export const VideoBlock = () => {
  return (
    <Block>
      <Content>
        <Wrapper>
          <Typography
            text={'Take A Look!'}
            variant='title'
            textAlign='center'
          />
          <Text>
            <Typography
              text={
                'Have a sneak peek at the setting and art of the game in this reveal trailer'
              }
              variant='text'
            />
          </Text>

          <VideoWrapper>
            <iframe
              width='100%'
              height={useMediaValue('323px', '400px', '500px', '639px')}
              src='https://www.youtube.com/embed/tQD1BNZgjYk?controls=0'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            ></iframe>
          </VideoWrapper>
        </Wrapper>
      </Content>
      <Intersect />
    </Block>
  );
};

const Text = styled.div(() => ({
  marginTop: '52px',
  '@media screen and (max-width:1439px)': {
    marginTop: '42px',
  },

  '@media screen and (max-width:1023px)': {
    marginTop: '32px',
  },

  '@media screen and (max-width:768px)': {
    marginTop: '24px',
  },
}));

const Block = styled.div(({ theme }) => ({
  width: '100%',
  marginTop: '180px',
  paddingBottom: '24px',
  position: 'relative' || theme?.position,

  '@media screen and (max-width:1439px)': {
    marginTop: '68px',
  },
}));

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex' || theme?.display,
  flexDirection: 'column',
  alignItems: 'center',
}));

const VideoWrapper = styled.div(() => ({
  margin: '52px 0',
  width: '100%',

  '@media screen and (max-width:1439px)': {
    margin: '42px 0',
  },

  '@media screen and (max-width:1023px)': {
    margin: '32px 0',
  },

  '@media screen and (max-width:768px)': {
    margin: '24px 0',
  },
}));

const Intersect = styled.div(({ theme }) => ({
  position: 'absolute' || theme?.position,
  left: 0,
  right: 0,
  width: '100%',
  height: '86px',
  background: `url(${intersect})`,
  backgroundSize: 'cover',
  transform: 'rotate(180deg)',
  bottom: '-86px',
}));
