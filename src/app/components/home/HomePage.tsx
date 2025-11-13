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
} from './HomePage.styled';
import BottomNavigation from '../bottom-nav/BottomNav';
import Banner from '../banner/Banner';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  // const handleNavigate = (navigateTo: string): void => {
  //   navigate(navigateTo);
  // };
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
      link: '/stories',
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
      link: '/stories',
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
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => navigate('/profile')}
          style={{ cursor: 'pointer' }}
        >
          <circle cx='12' cy='8' r='4' fill='currentColor' />
          <path d='M4 20c0-4 4-6 8-6s8 2 8 6' fill='currentColor' />
        </ProfileImage>
      </Banner>

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
      <BottomNavigation />
    </ScreenContainer>
  );
};

export default HomeScreen;
