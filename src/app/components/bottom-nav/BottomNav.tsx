/* eslint-disable */
import React from 'react';
import { GraduationCap, Heart, Home, Fan, Book } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BottomNav, TooltipWrapper, TooltipText, IconWrapper } from '../home/HomePage.styled';

interface NavItem {
  label: string;
  icon: React.ComponentType<{ size?: number }>;
  path?: string;
  isHome?: boolean;
}

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: 'Learn', icon: GraduationCap, path: '/learn' },
    { label: '', icon: Heart },
    { label: 'Home', icon: Home, path: '/home', isHome: true },
    { label: '', icon: Fan },
    { label: 'Stories', icon: Book, path: '/stories' },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <BottomNav>
      {navItems.map(({ label, icon: Icon, path }) => {
        const isActive = path ? location.pathname.startsWith(path) : false;
        const isClickable = !!path;

        return (
          <TooltipWrapper key={label}>
            <IconWrapper $isClickable={isClickable} $isActive={isActive}>
              <Icon size={24} onClick={() => isClickable && handleNavigate(path!)} />
            </IconWrapper>
            {isClickable && label && <TooltipText>{label}</TooltipText>}
          </TooltipWrapper>
        );
      })}
    </BottomNav>
  );
};

export default BottomNavigation;
