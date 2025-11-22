import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 1rem;
  // background: linear-gradient(180deg, #fbd2e1, #d8f3d1);
  // border-radius: 2rem;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
`;

export const ImageCard = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const OverlayText = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
`;

export const Header = styled.blockquote`
  position: relative;
  font-size: 3rem;
  font-weight: 2rem;
  line-height: 1.4;
  font-style: italic;
  text-align: center;
  flex-direction: column;
  color: #444;
  margin: 2rem auto;
  padding: 1rem;

  /* the borders */
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 60%; /* adjust this to control border length */
    height: 2px;
    background: #e36a9d; /* pink */
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`;

export const Author = styled.p`
  color: #dcdcdc;
  margin-top: 0.4rem;
  font-style: italic;
  font-size: 0.85rem;
`;

export const ProfileImage = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 42px;
  width: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
`;

export const SuggestedWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background: white;
  border-radius: 2rem;
  margin-top: -6rem;
  padding: 1rem;
  z-index: 0;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
`;

export const SuggestedTitle = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

export const Card = styled.div`
  background: #fbd8e7;
  padding: 1rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LearnCardText = styled.div`
  max-width: 80%;
`;

export const LearnCardHeading = styled.h3`
  font-size: 2.5rem;
  color: #333;
  font-weight: 550;
`;

export const LearnCardDescription = styled.p`
  font-size: 1.8rem;
  color: #6b6b6b;
`;

export const CardLink = styled.button`
  font-size: 0.85rem;
  color: #d31875;
  margin-top: 0.4rem;
  text-decoration: underline;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const LotusEmoji = styled.div`
  font-size: 3rem;
  color: #d31875;
`;

export const BottomNav = styled.nav`
  width: 100%;
  background: white;
  border-radius: 2rem;
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 1.2rem;
`;

export const HomeIndicator = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    width: 4px;
    height: 6px;
    background: #d31875;
    border-radius: 999px;
  }
`;
export const NextButton = styled(Link)`
  padding: 14px 48px;
  background-color: #fbd8e7;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: black;
  text-decoration: none;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:active {
    opacity: 0.9;
  }
`;

export const ScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 20px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 16px;
  margin: 32px 0;
`;
