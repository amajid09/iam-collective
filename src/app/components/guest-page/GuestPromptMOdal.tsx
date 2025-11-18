import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PinkButton } from '../landing-page/LandingPage.styles';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 400px;
  width: 90%;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Message = styled.p`
  margin-bottom: 2rem;
`;

type GuestPromptModalProps = {
  onClose: () => void;
};

export default function GuestPromptModal({ onClose }: GuestPromptModalProps) {
  const navigate = useNavigate();

  const handleSignUp = () => {
    onClose();
    navigate('/signup');
  };

  return (
    <Overlay>
      <Card>
        <Title>Sign up to continue</Title>
        <Message>
          Guests can browse, but signing up unlocks full access to stories and resources.
        </Message>
        <PinkButton onClick={handleSignUp}>Sign Up</PinkButton>
        <PinkButton onClick={onClose} style={{ marginLeft: '1rem', background: '#ffd7e8' }}>
          Cancel
        </PinkButton>
      </Card>
    </Overlay>
  );
}
