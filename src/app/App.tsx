import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mtnkente/paragon-foundation';
import { useWebViewMessageListener, sendJsonToNative } from './hooks/UseWebViewMessageListener';
import { CoreFonts } from '@mtnkente/paragon-core-fonts';
import HomeScreen from './components/home/HomePage';
import LearnScreen from './components/learn/Learn';
import Stories from './components/story/Stories';

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
    <ThemeProvider mode={'light'} platform={'core'}>
      <CoreFonts />
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/learn' element={<LearnScreen />} />
          <Route path='/heal' element={<Stories />} />
          <Route path='/stories' element={<Stories />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
