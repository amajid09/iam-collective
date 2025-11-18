/* eslint-disable */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ScreenContainer } from '../landing-page/LandingPage.styles';
import styled from 'styled-components';
import { PinkButton } from '../sign-up/SignUp.styles';
import { useAuth } from '../../context/AuthContext';

const LeftDecor = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    height: 200px;
  }

  div {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, #ffd7e8, #ffe4ec);
    opacity: 0.3;
  }

  .circle1 {
    width: 180px;
    height: 180px;
    top: 10%;
    left: 5%;
  }

  .circle2 {
    width: 120px;
    height: 120px;
    bottom: 15%;
    right: 10%;
  }
`;

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth(); //  pulls login() from AuthContext

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.7, duration: 0.5 } },
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert('Please enter valid email and password.');
      return;
    }

    // Create a temporary fake user (backend will replace this later)
    const mockUser = {
      id: '1234',
      name: 'IAM User',
      email,
      token: 'mock_token_abc123',
    };

    login(mockUser); // Sets user + clears guest mode
    navigate('/home'); // redirect
  };

  return (
    <ScreenContainer>
      <LeftDecor>
        <motion.div
          className='circle1'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className='circle2'
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 1.2 }}
        />
      </LeftDecor>

      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a' }}>Login</h1>

      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}
        onSubmit={handleLogin}
      >
        <motion.div custom={0} initial='hidden' animate='visible' variants={inputVariants}>
          <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '0.75rem',
              border: '1px solid #ffbfdc',
              outline: 'none',
              fontSize: '1rem',
            }}
            required
          />
        </motion.div>

        <motion.div custom={1} initial='hidden' animate='visible' variants={inputVariants}>
          <input
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '0.75rem',
              border: '1px solid #ffbfdc',
              outline: 'none',
              fontSize: '1rem',
            }}
            required
          />
        </motion.div>

        <motion.div initial='hidden' animate='visible' variants={buttonVariants}>
          <PinkButton type='submit' style={{ width: '100%' }}>
            Login
          </PinkButton>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <a
            href='#'
            style={{ fontSize: '0.85rem', color: '#6b7280', textDecoration: 'underline' }}
          >
            Forgot Password?
          </a>
        </motion.div>
      </form>
    </ScreenContainer>
  );
}
