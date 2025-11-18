/* eslint-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ScreenContainer,
  Card,
  ProfileImage,
  SuggestedWrapper,
  SuggestedTitle,
  CardText,
  CardHeading,
  CardDescription,
  CardLink,
  LotusEmoji,
  SuggestedCardsContainer,
} from '../home/HomePage.styled';
import BottomNavigation from '../bottom-nav/BottomNav';
import Banner from '../banner/Banner';

const GuestHomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const cardsData = [
    {
      headline: 'I AM Taking Action Against Gender-Based Violence',
      subline:
        'A healing movement for anyone impacted by gender-based violence (GBV) — turning real stories into real change.',
      cta: 'Join the Collective (Sign Up)',
      link: '/signup',
      restricted: true, // mark this card as restricted for guests
    },
    {
      headline: 'What is The I AM Collective?',
      subline: 'The I AM Collective is a healing movement and digital community...',
      cta: 'Learn More',
      link: '/stories',
      restricted: false,
    },
  ];

  return (
    <ScreenContainer>
      <Banner>
        <ProfileImage
          as='svg'
          width='40'
          height='40'
          viewBox='0 0 24 24'
          className='rounded-full bg-gray-200 text-gray-400'
          onClick={() => alert('Guests do not have profiles yet')}
          style={{ cursor: 'pointer' }}
        >
          <circle cx='12' cy='8' r='4' fill='currentColor' />
          <path d='M4 20c0-4 4-6 8-6s8 2 8 6' fill='currentColor' />
        </ProfileImage>
      </Banner>

      <SuggestedWrapper>
        <SuggestedTitle>Suggested for you (Guest)</SuggestedTitle>
        <SuggestedCardsContainer>
          {cardsData.map((card, index) => (
            <Card key={index}>
              <CardText>
                <CardHeading>{card.headline}</CardHeading>
                {card.subline && <CardDescription>{card.subline}</CardDescription>}
                {card.cta && !card.restricted && (
                  <CardLink onClick={() => card.link && navigate(card.link)}>{card.cta}</CardLink>
                )}
                {card.restricted && (
                  <CardLink onClick={() => navigate('/signup')} style={{ opacity: 0.6 }}>
                    {card.cta} (Sign up to access)
                  </CardLink>
                )}
              </CardText>
              <LotusEmoji>🌸</LotusEmoji>
            </Card>
          ))}
        </SuggestedCardsContainer>
      </SuggestedWrapper>

      <BottomNavigation />
    </ScreenContainer>
  );
};

export default GuestHomeScreen;
