/* eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, LeftPanel, RightPanel, FormTitle, SubmitButton } from './GuestPage.styles';

export default function GuestPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <LeftPanel>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(157, 78, 221, 0.3)',
            position: 'absolute',
            top: '15%',
            left: '15%',
          }}
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 1.2 }}
          style={{
            width: 150,
            height: 150,
            borderRadius: '50%',
            background: 'rgba(157, 78, 221, 0.3)',
            position: 'absolute',
            bottom: '10%',
            right: '10%',
          }}
        />
      </LeftPanel>

      <RightPanel>
        <FormTitle>Continue as Guest</FormTitle>

        <p style={{ marginBottom: '1.5rem', color: '#d6336c' }}>
          Explore our community and features without creating an account.
        </p>

        <SubmitButton onClick={() => navigate('/guest-home')}>Continue as Guest</SubmitButton>

        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#c2185b' }}>
          Want full access?{' '}
          <a href='/signup' style={{ color: '#e75480' }}>
            Sign Up
          </a>{' '}
          or{' '}
          <a href='/login' style={{ color: '#e75480' }}>
            Login
          </a>
        </p>
      </RightPanel>
    </Container>
  );
}
