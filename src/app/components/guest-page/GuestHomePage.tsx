/* eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(to bottom right, #ffe4ec, #ffd6e8);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #d6336c;
  margin-bottom: 2rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;
`;

const FeatureCard = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 14px rgba(231, 84, 128, 0.2);
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(231, 84, 128, 0.3);
  }
`;

const FeatureTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #e75480;
  margin-bottom: 0.5rem;
`;

const FeatureDesc = styled.p`
  font-size: 0.95rem;
  color: #c2185b;
`;

const Footer = styled.div`
  margin-top: 3rem;
  font-size: 0.9rem;
  color: #d6336c;
`;

const guestFeatures = [
  { title: 'Explore Community', desc: 'See community posts and resources.' },
  { title: 'Safety Tips', desc: 'Learn practical safety tips for daily life.' },
  { title: 'Events & Workshops', desc: 'Access upcoming events.' },
  { title: 'Support Links', desc: 'Connect with help services if needed.' },
];

export default function GuestHomePage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>Welcome, Guest!</Header>
      <FeatureGrid>
        {guestFeatures.map((feature, i) => (
          <FeatureCard
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDesc>{feature.desc}</FeatureDesc>
          </FeatureCard>
        ))}
      </FeatureGrid>

      <Footer>
        Want full access?{' '}
        <span style={{ color: '#e75480', cursor: 'pointer' }} onClick={() => navigate('/signup')}>
          Sign Up
        </span>{' '}
        or{' '}
        <span style={{ color: '#e75480', cursor: 'pointer' }} onClick={() => navigate('/login')}>
          Login
        </span>
      </Footer>
    </Container>
  );
}
