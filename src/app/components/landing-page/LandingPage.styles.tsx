/* eslint-disable */
import styled from 'styled-components';
import { Button } from '../buttons';

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const PinkButton = styled.button`
  background-color: #ffd7e8;
  color: #1a1a1a;
  padding: 20px 33px;
  font-size: 1.5rem;
  font-weight: 500;
  border: none;
  border-radius: 60px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: 'Work Sans', sans-serif;

  &:hover {
    background-color: #ffbfdc;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 120px;
  }
`;

export const DividerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 400px;
  gap: 2rem;
`;

export const Line = styled.div`
  width: 50%;
  height: 2px;
  background-color: rgb(255, 105, 180);
`;

export const DividerText = styled.span`
  margin: 0 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: black;
  text-align: center;
`;

export const NextButton = styled(Button)`
  background-color: rgb(255, 105, 180);
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ff85c0;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 2rem;
`;

export const FooterText = styled.span`
  font-size: 0.9rem;
  color: rgb(150, 150, 150);
`;

export const FooterLogos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const FooterLogo = styled.img`
  width: 80px;
  height: auto;
`;

export const LogoDivider = styled.div`
  width: 1px;
  height: 40px;
  background-color: rgb(200, 200, 200);
`;
