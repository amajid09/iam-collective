/* eslint-disable */
import React from 'react';
// import { Home, GraduationCap, Heart, Fan, Book } from 'lucide-react';
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
import {
  ButtonWrapper,
  Header,
  LearnCardDescription,
  LearnCardHeading,
  LearnCardText,
  NextButton,
  ScrollableContent,
} from './Learn.styled';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../bottom-nav/BottomNav';
import {
  BlueCard,
  CentredCard,
  OrangeCard,
  PinkCard,
  ServiceCardGridWrapper,
  SubTitle,
} from '../cards/Cards.style';

const LearnScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (navigateTo: string): void => {
    navigate(navigateTo);
  };

  return (
    <ScreenContainer>
      <ScrollableContent>
        <Header>
          Knowledge is strength. Your journey to empowerment through upskilling starts here.
        </Header>
        <ProfileImage src='https://randomuser.me/api/portraits/women/44.jpg' alt='Profile' />
        <SubTitle>We curate content according to three categories:</SubTitle>
        <ServiceCardGridWrapper>
          <PinkCard>
            <CentredCard>
              <LearnCardText>
                <LotusEmoji>🌸</LotusEmoji>
                <LearnCardHeading>Mindfulness</LearnCardHeading>
                <LearnCardDescription>
                  Tools to help you master stress, get in touch with your inner voice, and record
                  your journey.
                </LearnCardDescription>
              </LearnCardText>
            </CentredCard>
          </PinkCard>
          <OrangeCard>
            <CentredCard>
              <LearnCardText>
                <LotusEmoji>🌸</LotusEmoji>
                <LearnCardHeading>Empowerment</LearnCardHeading>
                <LearnCardDescription>
                  Tools to help you manage and avoid conflict. Learn healthy response patterns, and
                  identify red flags more effectively.
                </LearnCardDescription>
              </LearnCardText>
            </CentredCard>
          </OrangeCard>
          <BlueCard>
            <CentredCard>
              <LearnCardText>
                <LotusEmoji>🌸</LotusEmoji>
                <LearnCardHeading>Life Skills</LearnCardHeading>
                <LearnCardDescription>
                  Tools to upskill yourself holistically and keep that work/life balance in check.
                </LearnCardDescription>
              </LearnCardText>
            </CentredCard>
          </BlueCard>
        </ServiceCardGridWrapper>
        <ButtonWrapper>
          <NextButton to={'/micro-lessons'}>Next</NextButton>
        </ButtonWrapper>
      </ScrollableContent>

      {/* <BottomNav>
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
      </BottomNav> */}
      <BottomNavigation></BottomNavigation>
    </ScreenContainer>
  );
};

export default LearnScreen;
