/* eslint-disable */
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import {
//   Container,
//   LeftPanel,
//   RightPanel,
//   FormTitle,
//   Form,
//   Label,
//   TextInput,
//   PasswordInput,
//   SubmitButton,
//   ForgotPassword,
// } from "./LoginPage.styles";

// export default function LoginPage() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const inputVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.15, duration: 0.5 },
//     }),
//   };

//   const buttonVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1, transition: { delay: 0.7, duration: 0.5 } },
//   };

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Temporary check for testing
//     const isValid = email.trim() !== "" && password.trim() !== "";

//     if (isValid) {
//       navigate("/home"); // redirect to HomeScreen
//     } else {
//       alert("Please enter valid email and password.");
//     }
//   };

//   return (
//     <Container>
//       <LeftPanel>
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1 }}
//           style={{
//             width: 250,
//             height: 250,
//             borderRadius: "50%",
//             background: "rgba(157, 78, 221, 0.3)",
//             position: "absolute",
//             top: "20%",
//             left: "10%",
//           }}
//         />
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1.2 }}
//           transition={{ duration: 1.2 }}
//           style={{
//             width: 180,
//             height: 180,
//             borderRadius: "50%",
//             background: "rgba(157, 78, 221, 0.3)",
//             position: "absolute",
//             bottom: "15%",
//             right: "15%",
//           }}
//         />
//       </LeftPanel>

//       <RightPanel>
//         <FormTitle>Login</FormTitle>
//         <Form onSubmit={handleLogin}>
//           <motion.div
//             custom={0}
//             initial="hidden"
//             animate="visible"
//             variants={inputVariants}
//             style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
//           >
//             <Label htmlFor="email">Email</Label>
//             <TextInput
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </motion.div>

//           <motion.div
//             custom={1}
//             initial="hidden"
//             animate="visible"
//             variants={inputVariants}
//             style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
//           >
//             <Label htmlFor="password">Password</Label>
//             <PasswordInput
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </motion.div>

//           <motion.div initial="hidden" animate="visible" variants={buttonVariants}>
//             <SubmitButton type="submit">Login</SubmitButton>
//           </motion.div>

//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
//             <ForgotPassword href="#">Forgot Password?</ForgotPassword>
//           </motion.div>
//         </Form>
//       </RightPanel>
//     </Container>
//   );
// }

// // import React from "react";
// // import { useMsal } from "@azure/msal-react";
// // import {
// //   Container,
// //   LeftPanel,
// //   RightPanel,
// //   FormTitle,
// //   SubmitButton,
// // } from "./LoginPage.styles";

// // export default function LoginPage() {
// //   const { instance } = useMsal();

// //   const handleMicrosoftLogin = () => {
// //     instance.loginPopup({
// //       scopes: ["user.read"],
// //     })
// //     .then(response => {
// //       console.log("User info:", response.account);
// //       // navigate after successful login
// //       // navigate("/home");
// //     })
// //     .catch(err => console.error("Login error:", err));
// //   };

// //   return (
// //     <Container>
// //       <LeftPanel />
// //       <RightPanel>
// //         <FormTitle>Sign in with your MTN account</FormTitle>
// //         <SubmitButton onClick={handleMicrosoftLogin}>
// //           Sign in with Microsoft
// //         </SubmitButton>
// //       </RightPanel>
// //     </Container>
// //   );
// // }

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ScreenContainer, StyledContainer, PinkButton } from '../landing-page/LandingPage.styles';
import styled from 'styled-components';

// export default function LoginPage() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const inputVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.15, duration: 0.5 },
//     }),
//   };

//   const buttonVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1, transition: { delay: 0.7, duration: 0.5 } },
//   };

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email.trim() && password.trim()) {
//       navigate("/home");
//     } else {
//       alert("Please enter valid email and password.");
//     }
//   };

//   return (
//     <ScreenContainer>
//       <StyledContainer
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           background: "linear-gradient(180deg, #FAF0E6 0%, #FDEDF4 100%)",
//           padding: "2rem",
//           gap: "1.5rem",
//           maxWidth: "400px",
//           margin: "2rem auto",
//         }}
//       >
//         <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#1a1a1a" }}>
//           Login
//         </h1>

//         <form style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }} onSubmit={handleLogin}>
//           <motion.div custom={0} initial="hidden" animate="visible" variants={inputVariants}>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "0.75rem 1rem",
//                 borderRadius: "0.75rem",
//                 border: "1px solid #cba6f7",
//                 outline: "none",
//                 fontSize: "1rem",
//               }}
//               required
//             />
//           </motion.div>

//           <motion.div custom={1} initial="hidden" animate="visible" variants={inputVariants}>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "0.75rem 1rem",
//                 borderRadius: "0.75rem",
//                 border: "1px solid #cba6f7",
//                 outline: "none",
//                 fontSize: "1rem",
//               }}
//               required
//             />
//           </motion.div>

//           <motion.div initial="hidden" animate="visible" variants={buttonVariants}>
//             <PinkButton type="submit" style={{ width: "100%" }}>Login</PinkButton>
//           </motion.div>

//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
//             <a href="#" style={{ fontSize: "0.85rem", color: "#6b7280", textDecoration: "underline" }}>
//               Forgot Password?
//             </a>
//           </motion.div>
//         </form>
//       </StyledContainer>
//     </ScreenContainer>
//   );
// }

const LeftDecor = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    height: 200px;
  }

  div {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, #ffd7e8, #ffe4ec);
    opacity: 0.3;
  }

  .circle1 {
    width: 180px;
    height: 180px;
    top: 10%;
    left: 5%;
  }

  .circle2 {
    width: 120px;
    height: 120px;
    bottom: 15%;
    right: 10%;
  }
`;

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.7, duration: 0.5 } },
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      navigate('/home');
    } else {
      alert('Please enter valid email and password.');
    }
  };

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
          gap: '1.5rem',
          maxWidth: '400px',
          margin: '2rem auto',
        }}
      >
        {/* Decorative left panel */}
        <LeftDecor>
          <motion.div
            className='circle1'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className='circle2'
            initial={{ scale: 0 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 1.2 }}
          />
        </LeftDecor>

        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a' }}>Login</h1>

        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}
          onSubmit={handleLogin}
        >
          <motion.div custom={0} initial='hidden' animate='visible' variants={inputVariants}>
            <input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                border: '1px solid #ffbfdc',
                outline: 'none',
                fontSize: '1rem',
              }}
              required
            />
          </motion.div>

          <motion.div custom={1} initial='hidden' animate='visible' variants={inputVariants}>
            <input
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                border: '1px solid #ffbfdc',
                outline: 'none',
                fontSize: '1rem',
              }}
              required
            />
          </motion.div>

          <motion.div initial='hidden' animate='visible' variants={buttonVariants}>
            <PinkButton type='submit' style={{ width: '100%' }}>
              Login
            </PinkButton>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <a
              href='#'
              style={{ fontSize: '0.85rem', color: '#6b7280', textDecoration: 'underline' }}
            >
              Forgot Password?
            </a>
          </motion.div>
        </form>
      </StyledContainer>
    </ScreenContainer>
  );
}
