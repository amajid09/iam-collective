// LandingPage.styles.ts
import styled from "styled-components";
import { Button } from "../buttons";
import { motion } from "framer-motion";

export const ScreenContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  margin: 0 auto;
  overflow: visible;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
`;

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  flex: 1; 
  border-radius: 2rem;
  overflow: hidden;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
  background: linear-gradient(180deg, #faf0e6 0%, #fdedf4 100%);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
    border-radius: 1rem;
  }
`;

export const PinkButton = styled(Button)`
  background-color: #ffd7e8;
  color: #1a1a1a;
  padding: 1rem 2rem;
  font-size: 1.25rem;
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

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  background: white;
  border-radius: 2rem;
  padding: 1.5rem;
  margin-top: 3rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    color: #6b7280;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 2rem;
  }
`;
export const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

export const NavLinks = styled.nav<{ isOpen?: boolean }>`
  display: flex;
  gap: 2rem;

  a {
    color: #7b1fa2;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #9b30ff;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: 1rem;
    background: white;
    flex-direction: column;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    gap: 1rem;

    a {
      font-size: 1rem;
    }
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  width: 30px;
  height: 25px;
  flex-direction: column;
  justify-content: space-between;

  span {
    height: 3px;
    width: 100%;
    background: #7b1fa2;
    border-radius: 2px;
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #20a4cc;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const BottomLeftImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 250px;
  height: auto;
  z-index: 20;
  pointer-events: auto;

  @media (max-width: 768px) {
    width: 150px;
  }
`;