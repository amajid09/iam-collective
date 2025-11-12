/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { GraduationCap, Heart, Home, Fan, Book } from 'lucide-react';
import { BottomNav } from '../home/HomePage.styled';
import { useNavigate } from 'react-router-dom';

interface BottomNavProps {
  activeItem?: string;
}

const BottomNavigation: React.FC<BottomNavProps> = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<string>('');

  const handleNavigate = (navigateTo: string): void => {
    navigate(navigateTo);
  };
  const handleClick = (label: string, path?: string) => {
    setActiveItem(label);
    if (path) handleNavigate(path);
  };

  const navItems = [
    {
      label: 'Learn',
      icon: GraduationCap,
      path: '/learn',
    },
    {
      label: 'Heal',
      icon: Heart,
      path: '/heal',
    },
    {
      label: 'Home',
      icon: Home,
      path: '/',
      isHome: true,
    },
    {
      label: 'About',
      icon: Fan,
    },
    {
      label: 'Share',
      icon: Book,
      path: '/stories',
    },
  ];

  const TooltipItem = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
      {children}
      <span
        style={{
          visibility: 'hidden',
          opacity: 0,
          transition: 'opacity 0.2s',
          position: 'absolute',
          bottom: '36px',
          backgroundColor: 'rgba(0,0,0,0.75)',
          color: 'white',
          padding: '4px 8px',
          borderRadius: 6,
          fontSize: 12,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
        }}
        className='tooltip-text'
      >
        {label}
      </span>
    </div>
  );

  return (
    <>
      <BottomNav>
        {navItems.map(({ label, icon: Icon, path }) => {
          const isActive = activeItem === label;

          return (
            <TooltipItem key={label} label={label}>
              <Icon
                size={24}
                opacity={isActive ? 1 : 0.4}
                color={isActive ? '#d31875' : undefined}
                style={{ cursor: path ? 'pointer' : 'default' }}
                onClick={() => handleClick(label, path)}
              />
            </TooltipItem>
          );
        })}
      </BottomNav>
    </>
  );
};

export default BottomNavigation;
