/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { PinkButton } from '../story/Stories.style';

const LandingScreen: React.FC = (): React.ReactElement => {
  return (
    <div
      style={{
        // background: 'linear-gradient(180deg, #FFF9C4 0%, rgb(216, 166, 244) 100%)',
        background: 'linear-gradient(180deg, #fae0eb 0%, #f8d1df 100%)',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontFamily: 'math', fontSize: '3.5rem' }}>
        Your Saftey. Your Space. Your Power.
      </h1>
      <p>This is the starting point of the application.</p>
      <PinkButton onClick={() => {}} style={{ background: 'rgb(216, 166, 244)' }}>
        Get Started
      </PinkButton>
    </div>
  );
};
export default LandingScreen;
