/* eslint-disable react/jsx-no-bind */
/* eslint-disable  @typescript-eslint/no-floating-promises */
import React from 'react';
import { Home, GraduationCap, Heart, Fan, Book } from 'lucide-react';
import {
  ScreenContainer,
  ImageCard,
  Card,
  OverlayText,
  ProfileImage,
  SuggestedWrapper,
  SuggestedTitle,
  CardText,
  CardHeading,
  CardDescription,
  CardLink,
  LotusEmoji,
  BottomNav,
  HomeIndicator,
} from '../home/HomePage.styled';
import { QuotedText } from './Learn.styled';
import { useNavigate } from 'react-router-dom';

const LearnScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (navigateTo: string): void => {
    navigate(navigateTo);
  };

  return (
    <ScreenContainer>
      <ImageCard>
        <OverlayText>
          <QuotedText>This is a daily affirmation of support and positivity.</QuotedText>
          <ProfileImage src='https://randomuser.me/api/portraits/women/44.jpg' alt='Profile' />
        </OverlayText>
      </ImageCard>

      <SuggestedWrapper>
        <SuggestedTitle>Suggested for you</SuggestedTitle>
        <Card>
          <CardText>
            <CardHeading>Hello, I’m a card</CardHeading>
            <CardDescription>
              I am a card descriptor piece of text that gives context.
            </CardDescription>
            <CardLink>Call to action</CardLink>
          </CardText>
          <LotusEmoji>🌸</LotusEmoji>
        </Card>
      </SuggestedWrapper>

      <BottomNav>
        <GraduationCap size={24} opacity={0.4} />
        <Heart size={24} opacity={0.4} />
        <HomeIndicator>
          <Home
            size={28}
            color='#d31875'
            style={{ cursor: 'pointer' }}
            onClick={() => handleNavigate('/')}
          />
        </HomeIndicator>
        <Fan size={24} opacity={0.4} />
        <Book size={24} opacity={0.4} />
      </BottomNav>
    </ScreenContainer>
  );
};

export default LearnScreen;
