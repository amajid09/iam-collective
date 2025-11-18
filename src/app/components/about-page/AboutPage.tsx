import React from 'react';
import { AboutContainer, AboutContent, AboutTitle, AboutText, Highlight } from './AboutPage.styles';

const AboutPage: React.FC = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutTitle>About IAM Collective</AboutTitle>
        <AboutText>
          <Highlight>IAM Collective</Highlight> is a growing community-driven platform what cwhat
          what what.
        </AboutText>
        <AboutText>Our mission is to empower individuals etc etc etc</AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutPage;
