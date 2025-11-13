

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
  SuggestedCardsContainer,
} from './HomePage.styled';
import BottomNavigation from '../bottom-nav/BottomNav';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (navigateTo: string): void => {
    navigate(navigateTo);
  };
  const cardsData = [
    {
      headline: 'I AM Taking Action Against Gender-Based Violence',
      subline:
        'A healing movement for anyone impacted by gender-based violence (GBV) — turning real stories into real change.',
      cta: 'Join the Collective fight back through your self-healing',
      link: '/signup',
    },
    {
      headline: 'What is The I AM Collective?',
      subline:
        'The I AM Collective is a healing movement and digital community for anyone impacted by gender-based violence — directly or indirectly. We turn real stories into learning journeys and community insights that help people recognise abuse, heal, and take action.',
      cta: "Share your story & unlock healing & someone else's",
    },
    {
      headline: 'Join the Movement Teaser',
      subline:
        'Your contribution is not money — it is your commitment to learn, heal, and refuse to normalise abuse. When you join The I AM Collective, you become part of a community that is learning how to be a safe space, one person at a time.',
      cta: 'Join the collective',
      link: '/signup',
    },
    {
      headline: 'Who We Are',
      subline:
        'We’re a healing movement and digital community created to support anyone affected by gender-based violence (GBV). Our collective stories and learning is how we help each other recognise abuse, heal from it, and change how we show up in our homes, workplaces and online spaces.',
      cta: null, // some cards don't need CTA, maybe this could lead to 'about'
    },
    {
      headline: 'When one person heals, we all move.',
      subline:
        'When we change the conversation, we change behaviour. When we speak up, connect and heal, we create safer communities.',
      cta: 'Be the change. Become a member today',
    },
    {
      headline: 'It’s about collective action',
      subline:
        'When we heal the individual, we heal the collective. When we awaken the collective, we ignite change.',
      cta: 'Share your story',
    },
  ];

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
        <SuggestedCardsContainer>
          {cardsData.map((card, index) => (
            <Card key={index}>
              <CardText>
                <CardHeading>{card.headline}</CardHeading>
                {card.subline && <CardDescription>{card.subline}</CardDescription>}
                {card.cta && (
                  <CardLink
                    onClick={() => {
                      if (card.link) {
                        navigate(card.link);
                      }
                    }}
                  >
                    {card.cta}
                  </CardLink>
                )}
              </CardText>
              <LotusEmoji>🌸</LotusEmoji>
            </Card>
          ))}
        </SuggestedCardsContainer>
      </SuggestedWrapper>
      <BottomNavigation/>

      {/* <BottomNav>
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
      </BottomNav> */}
    </ScreenContainer>
  );
};

export default HomeScreen;
