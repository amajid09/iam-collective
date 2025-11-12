import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ScreenContainer,
  StyledContainer,
  PinkButton,
  CardWrapper,
  Header,
  NavLinks,
  Logo,
  Hamburger,
  HeroTitle,
 
  BottomLeftImage,
} from "./LandingPage.styles";

import { motion } from "framer-motion";
import Footer from "../footer/Footer";

export default function LandingPage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <ScreenContainer>
      <Header>
        <Logo
          src="/Header-Logo.png"
          alt="IAMCOLLECTIVE Logo"
          onClick={() => navigate("/")}
        />

        <Hamburger onClick={toggleMenu}>
  
          <span></span>
          <span></span>
          <span></span>
        
        </Hamburger>

        <NavLinks isOpen={menuOpen}>
          <a href="#main" onClick={() => setMenuOpen(false)}>Main</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#help" onClick={() => setMenuOpen(false)}>Help</a>
        </NavLinks>
      </Header>

      <StyledContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <HeroTitle>Your Safety. Your Space. Your Power.</HeroTitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* <PinkButton onClick={() => navigate("/continue")}>
            Get Started
          </PinkButton> */}
        </motion.div>

        <CardWrapper>
          <h2>Why Join IAM Collective?</h2>
          <p>
            Connect with a safe and supportive community. Share experiences,
            learn from others, and empower yourself and those around you.
          </p>
        </CardWrapper>
        <PinkButton onClick={() => navigate("/continue")}>
            Get Started
          </PinkButton>

        <Footer />
      </StyledContainer>
      <BottomLeftImage src="/landing-page.jpg" alt="Decorative" />
    </ScreenContainer>
  );
}
