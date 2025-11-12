import React from 'react';
import { HeaderContainer, Frame, ProfileImage } from './Header.style';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }): React.ReactElement => {
  return (
    <HeaderContainer>
      <Frame>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ fontFamily: 'Work Sans', margin: 0, fontSize: 40 }}>{title}</h1>
          <div
            style={{ height: '2px', width: '190%', backgroundColor: '#ff69b4', marginTop: '8px' }}
          ></div>
        </div>
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
      </Frame>
    </HeaderContainer>
  );
};

export default Header;
