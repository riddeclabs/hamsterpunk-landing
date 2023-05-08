import React, { useEffect, useState } from 'react';

import { useForm } from '@formspree/react';
import styled from 'styled-components';

import { Content } from '../../../components/Content';
import { Typography } from '../../../components/Typography';
import { colors } from '../../../constants/variables';

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
      <Content>
        <Typography
          text='Subscribe Now'
          variant='title'
          color={colors.black}
          textAlign='center'
        />
        <Text>
          <Typography
            color={colors.black}
            text='To get a free and amazing offers and other cool things stay with us and please subscribe us'
            lineHeight={'32px'}
            fontSize={'24px'}
            variant='text'
          />
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

  '@media screen and (max-width:1439px)': {
    marginTop: '88px',
    paddingBottom: '68px',
  },

  '@media screen and (max-width:1023px)': {
    marginTop: '68px',
    paddingBottom: '68px',
  },

  '@media screen and (max-width:768px)': {
    marginTop: '68px',
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

const Form = styled.form(({ theme }) => ({
  paddingBottom: '180px',
  display: 'flex',
  flexDirection: 'column' || theme?.column,
  alignItems: 'center',

  '@media screen and (max-width:1439px)': {
    paddingBottom: '88px',
  },

  '@media screen and (max-width:1023px)': {
    paddingBottom: '68px',
  },

  '@media screen and (max-width:768px)': {
    paddingBottom: '68px',
  },
}));

const Input = styled.input(() => ({
  width: '598px',

  padding: '10px 15px',
  borderRadius: '30px',
  background: '#f4e4c2',
  border: '1px solid #272522',

  fontFamily: 'Josefin Sans',
  fontSize: '26px',
  lineHeight: '35px',
  fontWeight: 400,

  '@media screen and (max-width:1439px)': {
    fontSize: '20px',
    lineHeight: '30px',
  },

  '@media screen and (max-width:1023x)': {
    fontSize: '16px',
    lineHeight: '20px',
  },

  '@media screen and (max-width:768px)': {
    width: '398px',
    maxWidth: '100%',
    fontSize: '12px',
    lineHeight: '16px',
  },
}));

const SubmitButton = styled.button(() => ({
  cursor: 'pointer',
  marginTop: '24px',
  padding: '10px 30px',
  borderRadius: '20px',
  background: colors.black,
  border: `1px solid ${colors.black}`,
  color: colors.white,
  fontSize: '20px',
  lineHeight: '20px',
  fontWeight: 400,

  '&:hover:not(:disabled)': {
    background: 'none',
    color: colors.black,
  },

  '&:disabled': {
    background: '#e5e5e5',
    color: '#727272',
    cursor: 'not-allowed',
    border: '1px solid #bbacac',
  },

  '@media screen and (max-width:1439px)': {
    fontSize: '20px',
    lineHeight: '20px',
  },

  '@media screen and (max-width:1023x)': {
    fontSize: '16px',
    lineHeight: '16px',
    marginTop: '24px',
  },

  '@media screen and (max-width:768px)': {
    fontSize: '12px',
    lineHeight: '12px',
    marginTop: '16px',
  },
}));
