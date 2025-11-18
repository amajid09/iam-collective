import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useWebViewMessageListener, sendJsonToNative } from './hooks/UseWebViewMessageListener';
import HomeScreen from './components/home/HomePage';
import LearnScreen from './components/learn/Learn';
import Stories from './components/story/Stories';
import LandingPage from './components/landing-page/LandingPage';
import SignUpPage from './components/sign-up/SignUpPage';
import LoginPage from './components/log-in/LogIn';
import GuestPage from './components/guest-page/GuestPage';
// import ContinuePage from './components/continue/ContinuePage';
// import ContinuePage from './components/continue/ContinuePage';
import GuestHomePage from './components/guest-page/GuestHomePage';
// import HomeScreen from './components/home/Home';
import AboutPage from './components/about-page/AboutPage';
import ProfilePage from './components/profile-page/ProfilePage';

type AppProps = {
  data?: unknown;
};

const App: React.FC<AppProps> = (config) => {
  useWebViewMessageListener();

  useEffect(() => {
    if (!config.data) {
      sendJsonToNative('custom message from featureApp - pass custom data');
    }
  }, [config.data]);

  return (
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutPage />} />
          {/* <Route path='/continue' element={<ContinuePage />} /> */}
          {/* <Route path='/continue' element={<ContinuePage />} /> */}
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/guest' element={<GuestPage />} />
          <Route path='/guest-home' element={<GuestHomePage />} />
          <Route path='/home' element={<HomeScreen />} />
          <Route path='/profile' element={<ProfilePage />} />
          {/* <Route path='/homepage' element={<HomeScreen />} /> */}
          <Route path='/learn' element={<LearnScreen />} />
          <Route path='/heal' element={<Stories />} />
          <Route path='/stories' element={<Stories />} />
        </Routes>
      </Router>
  );
};

export default App;
