import React from 'react';

import styled from 'styled-components';

import { intersect } from '../../../assets/images';
import { Content } from '../../../components/Content';
import { Typography } from '../../../components/Typography';

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
          <VideoWrapper>
            <iframe
              width='100%'
              height='639px'
              src='https://www.youtube.com/embed/lSM_j3iJ2bE?controls=0'
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

const Block = styled.div(({ theme }) => ({
  width: '100%',
  marginTop: '180px',
  paddingBottom: '24px',
  position: 'relative' || theme?.position,
}));

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex' || theme?.display,
  flexDirection: 'column',
  alignItems: 'center',
}));

const VideoWrapper = styled.div(() => ({
  margin: '52px 0',
  width: '100%',
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
