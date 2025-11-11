/* eslint-disable react/jsx-no-bind */
/* eslint-disable  @typescript-eslint/no-floating-promises */
import { Book, Fan, GraduationCap, Heart, Home } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../banner/Banner';
import {
  BottomNav,
  Card,
  CardDescription,
  CardHeading,
  CardLink,
  CardText,
  HomeIndicator,
  LotusEmoji,
  ProfileImage,
  ScreenContainer,
  SuggestedTitle,
  SuggestedWrapper,
} from './HomePage.styled';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (navigateTo: string): void => {
    navigate(navigateTo);
  };

  return (
    <ScreenContainer>
      <Banner>
        <ProfileImage src='https://randomuser.me/api/portraits/women/44.jpg' alt='Profile' />
      </Banner>

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
