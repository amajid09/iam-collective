/* eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, GraduationCap, Heart, Fan, Book } from 'lucide-react';
import {
  ScreenContainer,
  ImageCard,
  BackgroundImage,
  Card,
  OverlayText,
  Author,
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
  Quote,
} from './Home.styles';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (navigateTo: string): void => {
    navigate(navigateTo);
  };

  return (
    <ScreenContainer>
      <ImageCard>
        <BackgroundImage
          src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
          alt='Nature background'
        />
        <OverlayText>
          <Quote>This is a daily affirmation of support and positivity.</Quote>
          <Author>– The author</Author>
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
        <GraduationCap
          size={24}
          opacity={0.4}
          style={{ cursor: 'pointer' }}
          onClick={() => handleNavigate('/quotes')}
        />
        <Heart size={24} opacity={0.4} />
        <HomeIndicator>
          <Home size={28} color='#d31875' />
        </HomeIndicator>
        <Fan size={24} opacity={0.4} />
        <Book size={24} opacity={0.4} />
      </BottomNav>
    </ScreenContainer>
  );
};

export default HomeScreen;
