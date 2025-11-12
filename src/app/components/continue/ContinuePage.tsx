/* eslint-disable */
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Container,
//   Title,
//   Subtitle,
//   OptionGroup,
//   OptionCard,
//   OptionTitle,
//   OptionText,
//   Footer
// } from "./ContinuePage.styles";

// export default function ContinuePage() {
//   const navigate = useNavigate();

//   return (
//     <Container>
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <Title>Welcome</Title>
//         <Subtitle>How would you like to continue?</Subtitle>
//       </motion.div>

//       <OptionGroup>
//         <motion.div whileHover={{ scale: 1.03 }}>
//           <OptionCard onClick={() => navigate("/login")}>
//             <OptionTitle>Log In</OptionTitle>
//             <OptionText>Already have an account?</OptionText>
//           </OptionCard>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.03 }}>
//           <OptionCard onClick={() => navigate("/signup")}>
//             <OptionTitle>Sign Up</OptionTitle>
//             <OptionText>New here? Create your account to join us.</OptionText>
//           </OptionCard>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.03 }}>
//           <OptionCard onClick={() => navigate("/home")}>
//             <OptionTitle>Continue as Guest</OptionTitle>
//             <OptionText>Explore the app without creating an account.</OptionText>
//           </OptionCard>
//         </motion.div>
//       </OptionGroup>

//       <Footer>Safe. Strong. Connected.</Footer>
//     </Container>
//   );
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScreenContainer, StyledContainer, PinkButton } from '../landing-page/LandingPage.styles';
import styled from 'styled-components';

// // Option group styled for alignment with Stories / Login
// const OptionGroupStyled = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.25rem;
//   width: 100%;
// `;

// const OptionCardStyled = styled(PinkButton)`
//   background: linear-gradient(to right, #fff0f6, #fdf0f5);
//   color: #1a1a1a;
//   padding: 1.25rem;
//   text-align: left;
//   border-radius: 1rem;
//   font-size: 1rem;
//   font-weight: 500;
//   transition: all 0.25s ease;
//   box-shadow: 0 4px 14px rgba(255, 105, 180, 0.15);

//   &:hover {
//     background: linear-gradient(to right, #ffe4ec, #ffd7e8);
//     transform: translateY(-3px);
//     box-shadow: 0 6px 20px rgba(255, 105, 180, 0.25);
//   }
// `;

// const OptionTitle = styled.h2`
//   font-size: 1.25rem;
//   font-weight: 600;
//   margin-bottom: 0.25rem;
//   color: #1a1a1a;
// `;

// const OptionText = styled.p`
//   font-size: 0.95rem;
//   color: #555;
// `;

// const PageFooter = styled.p`
//   margin-top: 2rem;
//   font-size: 0.85rem;
//   color: #6b7280;
// `;

// export default function ContinuePage() {
//   const navigate = useNavigate();

//   return (
//     <ScreenContainer>
//       <StyledContainer
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           textAlign: 'center',
//           background: 'linear-gradient(180deg, #FAF0E6 0%, #FDEDF4 100%)',
//           padding: '1.5rem',
//           gap: '1.5rem',
//           width: '100%',
//           maxWidth: '400px',
//           margin: '2rem auto',
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1a1a1a' }}>Welcome</h1>
//           <p style={{ fontSize: '1rem', color: '#555', marginTop: '0.5rem' }}>
//             How would you like to continue?
//           </p>
//         </motion.div>

//         <OptionGroupStyled>
//           <motion.div whileHover={{ scale: 1.03 }}>
//             <OptionCardStyled onClick={() => navigate('/login')}>
//               <OptionTitle>Log In</OptionTitle>
//               <OptionText>Already have an account?</OptionText>
//             </OptionCardStyled>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.03 }}>
//             <OptionCardStyled onClick={() => navigate('/signup')}>
//               <OptionTitle>Sign Up</OptionTitle>
//               <OptionText>New here? Create your account to join us.</OptionText>
//             </OptionCardStyled>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.03 }}>
//             <OptionCardStyled onClick={() => navigate('/home')}>
//               <OptionTitle>Continue as Guest</OptionTitle>
//               <OptionText>Explore the app without creating an account.</OptionText>
//             </OptionCardStyled>
//           </motion.div>
//         </OptionGroupStyled>

//         <PageFooter>Safe. Strong. Connected.</PageFooter>
//       </StyledContainer>
//     </ScreenContainer>
//   );
// }

// Decorative gradient circles (like Login page)
const Circle = styled(motion.div)<{
  size: number;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background: rgba(255, 105, 180, 0.25);
  top: ${({ top }) => top || 'auto'};
  left: ${({ left }) => left || 'auto'};
  bottom: ${({ bottom }) => bottom || 'auto'};
  right: ${({ right }) => right || 'auto'};
`;

const OptionGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
`;

const OptionCardStyled = styled(PinkButton)`
  background: linear-gradient(to right, #fff0f6, #fdf0f5);
  color: #1a1a1a;
  padding: 1.25rem;
  text-align: left;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.25s ease;
  box-shadow: 0 4px 14px rgba(255, 105, 180, 0.15);

  &:hover {
    background: linear-gradient(to right, #ffe4ec, #ffd7e8);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 105, 180, 0.25);
  }
`;

const OptionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #1a1a1a;
`;

const OptionText = styled.p`
  font-size: 0.95rem;
  color: #555;
`;

const PageFooter = styled.p`
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #6b7280;
`;

export default function ContinuePage() {
  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <StyledContainer
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: 'linear-gradient(180deg, #FAF0E6 0%, #FDEDF4 100%)',
          padding: '2rem',
          gap: '2rem',
          width: '100%',
          maxWidth: '400px',
          margin: '2rem auto',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative Circles */}
        <Circle
          size={250}
          top='-20%'
          left='-15%'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <Circle
          size={180}
          bottom='-10%'
          right='-10%'
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 1.2 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1a1a1a' }}>Welcome</h1>
          <p style={{ fontSize: '1rem', color: '#555', marginTop: '0.5rem' }}>
            How would you like to continue?
          </p>
        </motion.div>

        <OptionGroupStyled>
          <motion.div whileHover={{ scale: 1.03 }}>
            <OptionCardStyled onClick={() => navigate('/login')}>
              <OptionTitle>Log In</OptionTitle>
              <OptionText>Already have an account?</OptionText>
            </OptionCardStyled>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }}>
            <OptionCardStyled onClick={() => navigate('/signup')}>
              <OptionTitle>Sign Up</OptionTitle>
              <OptionText>New here? Create your account to join us.</OptionText>
            </OptionCardStyled>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }}>
            <OptionCardStyled onClick={() => navigate('/home')}>
              <OptionTitle>Continue as Guest</OptionTitle>
              <OptionText>Explore the app without creating an account.</OptionText>
            </OptionCardStyled>
          </motion.div>
        </OptionGroupStyled>

        <PageFooter>Safe. Strong. Connected.</PageFooter>
      </StyledContainer>
    </ScreenContainer>
  );
}
