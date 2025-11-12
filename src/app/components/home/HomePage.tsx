import React from 'react';
import Banner from '../banner/Banner';
import { ProfileImage, ScreenContainer } from './HomePage.styled';
import AffirmationCards from '../cards/Cards';
import { defaultAffirmations } from '../../../services/affirmations';
import BottomNavigation from '../bottom-nav/BottomNav';

const HomeScreen: React.FC = () => {
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
        >
          <circle cx='12' cy='8' r='4' fill='currentColor' />
          <path d='M4 20c0-4 4-6 8-6s8 2 8 6' fill='currentColor' />
        </ProfileImage>{' '}
      </Banner>
      <AffirmationCards items={defaultAffirmations} />
      <BottomNavigation></BottomNavigation>
    </ScreenContainer>
  );
};

export default HomeScreen;
