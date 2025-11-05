import React, { useEffect } from 'react';
import { ThemeProvider } from '@mtnkente/paragon-foundation';
import Welcome from './components/welcome/Welcome';
import { useWebViewMessageListener, sendJsonToNative } from './hooks/UseWebViewMessageListener';
import { CoreFonts } from '@mtnkente/paragon-core-fonts';

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
      <Welcome />
    </ThemeProvider>
  );
};

export default App;
