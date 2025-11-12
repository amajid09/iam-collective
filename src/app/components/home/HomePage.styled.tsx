/* eslint-disable */
import styled from 'styled-components';

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 2.5rem;
  margin: 0 auto;
  overflow-x: hidden;
`;

export const ImageCard = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  min-height: 250px;
  max-height: 400px;
  border-radius: 0 0 2rem 2rem;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  @media (max-width: 1024px) {
    height: 35vh;
  }
  @media (max-width: 768px) {
    height: 30vh;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 480px) {
    height: 25vh;
    margin-bottom: 1rem;
  }
`;
export const SlideWrapper = styled.div<{ $activeIndex: number }>`
  display: flex;
  height: 100%;
  width: 100%;
  transition: transform 1s ease-in-out;
  transform: translateX(${({ $activeIndex }) => `-${$activeIndex * 100}%`});
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  flex-shrink: 0;
  transition: transform 0.5s ease-in-out;
`;

export const OverlayText = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 1.5rem;
  right: 1.5rem;
  z-index: 2;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    bottom: 1.5rem;
    left: 1rem;
    right: 1rem;
  }

  @media (max-width: 480px) {
    bottom: 1rem;
    left: 0.75rem;
    right: 0.75rem;
  }
`;

export const Quote = styled.p`
  color: white;
  font-size: 1.4rem;
  font-family: 'Georgia', serif;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Author = styled.p`
  color: #dcdcdc;
  margin-top: 0.4rem;
  font-style: italic;
  font-size: 0.85rem;

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
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

  @media (max-width: 600px) {
    height: 36px;
    width: 36px;
  }
`;

export const SuggestedWrapper = styled.div`
  width: 100%;
  background: white;
  border-radius: 2rem;
  margin-top: 6rem;
  padding: 1rem 1.2rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.8rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    border-radius: 1.5rem;
    padding: 0.75rem 1rem;
    margin-top: -4rem;
  }

  @media (max-width: 480px) {
    border-radius: 1rem;
    padding: 0.75rem;
    margin-top: -3rem;
  }
`;

export const SuggestedTitle = styled.p`
  font-size: 1rem;
  color: #6b7280;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const Card = styled.div`
  background: #fbd8e7;
  padding: 1rem 1.25rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: row;
    padding: 0.8rem 1rem;
    border-radius: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 0.75rem;
  }
`;

export const CardText = styled.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;

export const CardHeading = styled.h3`
  font-size: 1.1rem;
  color: #333;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.25rem;
  line-height: 1.3;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;
export const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #6b6b6b;
  margin: 0;
  line-height: 1.4;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
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
  font-size: 2.5rem;
  color: #d31875;
  flex-shrink: 0;
  align-self: center;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    align-self: flex-end;
  }
`;

export const BottomNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;

  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;
  }

  div:hover > span {
    visibility: visible;
    opacity: 1;
  }
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

export const TooltipWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover > span {
    visibility: visible;
    opacity: 1;
  }
`;

export const TooltipText = styled.span`
  position: absolute;
  bottom: 36px;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease;
  pointer-events: none;
`;

export const IconWrapper = styled.div<{ $isClickable: boolean; $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease-in-out;

  svg {
    opacity: ${({ $isActive, $isClickable }) => ($isActive ? 1 : $isClickable ? 0.5 : 0.3)};
    color: ${({ $isActive }) => ($isActive ? '#d31875' : 'inherit')};
    cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'default')};
    transition: all 0.25s ease-in-out;

    &:hover {
      ${({ $isClickable }) =>
        $isClickable &&
        `
        color: #f8bcd8;
        transform: scale(1.1);
        opacity: 1;
      `}
    }
  }
`;
