import React, { useEffect, useState } from 'react';

import { useForm } from '@formspree/react';
import styled from 'styled-components';

import { iconCloud, qrCodeNative } from '../../../assets/images';

export const Subscription = () => {
  const [state, handleSubmit] = useForm(
    process.env?.REACT_APP_FORM_KEY || 'mayzvzqq'
  );
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (state.succeeded) {
      setEmail('');
      alert('The form was successfully submitted');
    }
  }, [state.succeeded]);

  return (
    <Wrapper id='faq'>
      <CloudBlock>
        <CloudImage src={iconCloud} />
        <Title>
          Join our
          <br /> Telegram game
        </Title>
        <QRCodeWrapper>
          <a
            href='https://t.me/HamsterpunkBot'
            target='_blank'
            rel='noreferrer'
          >
            <img src={qrCodeNative} alt='qrCode' />
          </a>
        </QRCodeWrapper>
      </CloudBlock>
      <Text>
        <TypographyDescription>
          Remember, the world of gaming never stands still. Subscribe and stay
          informed.
        </TypographyDescription>
      </Text>
      <Form onSubmit={handleSubmit}>
        <Input
          id='email'
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e?.target.value)}
          placeholder='Email Address'
        />

        <SubmitButton type='submit' disabled={state.submitting || !email}>
          SUBSCRIBE
        </SubmitButton>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex' || theme?.display,
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '40px',

  '@media screen and (max-width:1130px)': {
    marginTop: '80px',
  },
}));

const CloudBlock = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  position: 'relative' || theme?.position,
  width: '836px',
  height: '504px',

  '@media screen and (max-width:1130px)': {
    width: '668px',
    height: '402px',
  },

  '@media screen and (max-width:768px)': {
    width: '335px',
    height: '202px',
    marginBottom: '48px',
  },
}));

const CloudImage = styled.img(({ theme }) => ({
  position: 'absolute' || theme?.position,

  '@media screen and (max-width:1130px)': {
    width: '100%',
  },
}));

const Title = styled.div(({ theme }) => ({
  fontFamily: 'Octopus Bold Inline' || theme?.fontFamily,
  color: 'rgba(167, 76, 71, 1)',
  fontSize: '64px',
  fontWeight: '400',
  lineHeight: '51px',
  letterSpacing: '0em',
  textAlign: 'center',
  marginBottom: '40px',
  position: 'relative',
  zIndex: 1,

  '@media screen and (max-width:1130px)': {
    fontSize: '48px',
    lineHeight: '32px',
    marginBottom: '20px',
  },

  '@media screen and (max-width:768px)': {
    fontSize: '40px',
    maxWidth: '200px',
  },
}));

const QRCodeWrapper = styled.div(({ theme }) => ({
  display: 'flex' || theme?.display,
  alignItems: 'center',
  marginBottom: '130px',
  position: 'relative',
  zIndex: 1,

  '& img': {
    width: '120px',
  },

  '@media screen and (max-width:1130px)': {
    marginBottom: '96px',

    '& img': {
      width: '70px',
    },
  },

  '@media screen and (max-width:768px)': {
    marginBottom: '60px',
    marginTop: '50px',
    gap: '24px',
  },
}));

const Text = styled.div(({ theme }) => ({
  margin: '64px auto 21px auto',
  textAlign: 'center' || theme?.center,
  width: '458px',

  '@media screen and (max-width:768px)': {
    margin: '48px auto 24px auto',
    width: '100%',
    maxWidth: '100%',
    padding: '0 20px',
  },
}));

const TypographyDescription = styled.p(({ theme }) => ({
  fontFamily: 'Josefin Sans' || theme?.fontFamily,
  fontSize: '20px',
  fontWeight: 400,
  lineHeight: '26px',
  letterSpacing: '0px',
  textAlign: 'center',
  color: 'rgba(72, 55, 47, 1)',

  '@media screen and (max-width:600px)': {
    textAlign: 'left',
  },
}));

const Form = styled.form(({ theme }) => ({
  display: 'flex' || theme?.display,
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0px 0 109px 0',
  gap: '40px',

  '@media screen and (max-width:768px)': {
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'flex-start',
    width: '100%',
    padding: '0px 20px',
  },
}));

const Input = styled.input(() => ({
  width: '298px',
  height: '40px',
  padding: '8px 12px',
  outline: 'none',

  fontFamily: 'Octopus Bold Inline',
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '18px',
  letterSpacing: '0em',

  borderRadius: '4px',
  border: '1px solid #F2D59B',
  background: '#F6E8CD',
}));

const SubmitButton = styled.button(() => ({
  cursor: 'pointer',
  padding: '9px 19px',

  borderRadius: '4px',
  background: '#A74C47',
  border: `1px solid #A74C47`,
  color: '#fff',

  fontFamily: 'Octopus Bold Inline',
  fontSize: '18px',
  fontWeight: 400,
  height: '40px',

  '&:hover:not(:disabled)': {
    filter: 'brightness(1.2)',
  },

  '&:disabled': {
    filter: 'brightness(0.7)',
    cursor: 'not-allowed',
  },

  '@media screen and (max-width:1439px)': {
    fontSize: '20px',
    lineHeight: '20px',
  },

  '@media screen and (max-width:1023x)': {
    fontSize: '16px',
    lineHeight: '16px',
  },

  '@media screen and (max-width:768px)': {
    width: 'auto',
    height: '42px',
    padding: '11px 19px',
    fontSize: '16px',
    lineHeight: '16px',
    border: `1px solid #FFFFFF`,
  },
}));
