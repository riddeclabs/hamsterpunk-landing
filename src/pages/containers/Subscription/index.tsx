import React, { useEffect, useState } from 'react';

import { useForm } from '@formspree/react';
import styled from 'styled-components';

import { Content } from '../../../components/Content';
import { colors } from '../../../constants/variables';
import { useMobile } from '../../../utils/commonFunctions';

export const Subscription = () => {
  const [state, handleSubmit] = useForm(
    process.env?.REACT_APP_FORM_KEY || 'mayzvzqq'
  );
  const [email, setEmail] = useState('');

  const isMobile = useMobile();

  useEffect(() => {
    if (state.succeeded) {
      setEmail('');
      alert('The form was successfully submitted');
    }
  }, [state.succeeded]);

  return (
    <Wrapper id='faq'>
      <Content>
        <TypographyTitle>Stay Ahead of the Game!</TypographyTitle>
        <TypographyTitle style={{ marginTop: isMobile ? '12px' : '16px' }}>
          Subscribe for Exciting Updates and News!
        </TypographyTitle>

        <Text>
          <TypographyDescription>
            Remember, the world of gaming never stands still. Stay ahead, stay
            informed, and stay connected with our updates or news subscription.{' '}
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
            SUBMIT
          </SubmitButton>
        </Form>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div(() => ({
  marginTop: '110px',
  paddingBottom: '0px',
  borderBottom: '1px solid rgba(255,255,255,0.2)',

  '@media screen and (max-width:1439px)': {
    marginTop: '88px',
  },

  '@media screen and (max-width:1023px)': {
    marginTop: '68px',
  },

  '@media screen and (max-width:768px)': {
    marginTop: '0px',
  },
}));

const TypographyTitle = styled.p(({ theme }) => ({
  fontFamily: 'Titan One',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '30px',
  lineHeight: '34px',
  letterSpacing: '0.04em',
  textTransform: 'capitalize' || theme?.transform,
  color: colors.titles,
  textAlign: 'center',

  '@media screen and (max-width:1439px)': {
    fontSize: '24px',
    lineHeight: '26px',
  },

  '@media screen and (max-width:1023px)': {
    fontSize: '20px',
    lineHeight: '22px',
  },

  '@media screen and (max-width:768px)': {
    fontSize: '14px',
    lineHeight: '16px',
  },
}));

const Text = styled.div(({ theme }) => ({
  margin: '24px auto 24px auto',
  textAlign: 'center' || theme?.center,
  width: '598px',

  '@media screen and (max-width:1439px)': {
    margin: '42px auto 42px auto',
  },

  '@media screen and (max-width:1023px)': {
    margin: '32px auto 32px auto',
  },

  '@media screen and (max-width:768px)': {
    margin: '16px auto 16px auto',
    width: '398px',
    maxWidth: '100%',
  },
}));

const TypographyDescription = styled.p(({ theme }) => ({
  fontWeight: 400,
  fontSize: '24px' || theme?.fontSize,
  lineHeight: '32px',
  color: colors.mainText,
  textAlign: 'center',
  marginTop: '24px',

  '@media screen and (max-width:1439px)': {
    fontSize: '18px',
    lineHeight: '22px',
  },

  '@media screen and (max-width:1023px)': {
    fontSize: '14px',
    lineHeight: '28px',
  },

  '@media screen and (max-width:768px)': {
    marginTop: '16px',
    fontSize: '12px',
    lineHeight: '16px',
  },
}));

const Form = styled.form(({ theme }) => ({
  display: 'flex' || theme?.display,
  alignItems: 'center',
  justifyContent: 'center',
  margin: '66px 0',
  gap: '20px',

  '@media screen and (max-width:1439px)': {
    margin: '54px 0',
  },

  '@media screen and (max-width:1023px)': {
    margin: '44px 0',
  },

  '@media screen and (max-width:768px)': {
    flexDirection: 'column',
    margin: '34px 0',
  },
}));

const Input = styled.input(() => ({
  width: '519px',
  height: '55px',
  padding: '16px 30px',
  background: '#F4E5C2',
  fontFamily: 'Josefin Sans',
  fontSize: '26px',
  lineHeight: '35px',
  fontWeight: 400,
  outline: 'none',

  '@media screen and (max-width:1439px)': {
    fontSize: '20px',
    lineHeight: '30px',
  },

  '@media screen and (max-width:1023x)': {
    fontSize: '16px',
    lineHeight: '20px',
  },

  '@media screen and (max-width:768px)': {
    maxWidth: '100%',
    fontSize: '16px',
    lineHeight: '16px',
    width: '100%',
    height: '42px',
  },
}));

const SubmitButton = styled.button(() => ({
  cursor: 'pointer',
  padding: '18px 40px',
  background: '#F09D51',
  border: `2px solid #FFFFFF`,
  color: colors.black,
  fontSize: '24px',
  lineHeight: '24px',
  fontWeight: 600,
  height: '55px',

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
    width: '100%',
    height: '42px',
    padding: '16px 0',
    fontSize: '16px',
    lineHeight: '16px',
    border: `1px solid #FFFFFF`,
  },
}));
