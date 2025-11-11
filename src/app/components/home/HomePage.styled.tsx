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
export const SlideWrapper = styled.div<{ $activeIndex: number }>`
  display: flex;
  height: 100%;
  width: 100%;
  transition: transform 1s ease-in-out;
  transform: translateX(${({ $activeIndex }): string => `-${$activeIndex * 100}%`});
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
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

export const Quote = styled.p`
  color: white;
  font-size: 1.4rem;
  font-family: 'Georgia', serif;
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

export const CardText = styled.div`
  max-width: 70%;
`;

export const CardHeading = styled.h3`
  font-size: 1.1rem;
  color: #333;
  font-weight: 600;
`;

export const CardDescription = styled.p`
  font-size: 0.85rem;
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
