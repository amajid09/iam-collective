/* eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DividerText,
  DividerWrapper,
  Footer,
  FooterLogo,
  FooterLogos,
  FooterText,
  Line,
  Logo,
  LogoDivider,
  MainContent,
  PinkButton,
  ScreenContainer,
} from './ContinuePage.styles';
import { useAuth } from '../../context/AuthContext';

export default function ContinuePage() {
  const navigate = useNavigate();
  const { continueAsGuest } = useAuth();

  const handleGuest = () => {
    continueAsGuest(); // sets guest mode in auth state
    navigate('/guest-home'); //  redirect for guests
  };

  return (
    <ScreenContainer>
      <MainContent>
        <Logo src='/Header-Logo.png' alt='IAMCOLLECTIVE Logo' />

        <DividerWrapper>
          <Line />
          <DividerText>Select how you'd like to continue</DividerText>
          <Line />
        </DividerWrapper>

        <PinkButton onClick={() => navigate('/login')}>Log In</PinkButton>

        <PinkButton onClick={() => navigate('/signup')}>Sign Up</PinkButton>

        <PinkButton onClick={handleGuest}>Continue as Guest</PinkButton>
      </MainContent>

      <Footer>
        <FooterText>I AM Collective is powered by</FooterText>
        <FooterLogos>
          <FooterLogo src='/MTN-Logo.png' alt='MTN-Logo' />
          <LogoDivider />
          <FooterLogo src='/chenosis.png' alt='chenosis' />
          {/* <LogoDivider />
          <FooterLogo src='/unite.png' alt='unite' /> */}
        </FooterLogos>
      </Footer>
    </ScreenContainer>
  );
}
