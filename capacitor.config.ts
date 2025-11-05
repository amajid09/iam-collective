import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'fa-kente-iam-collective',
  appName: 'fa-kente-iam-collective',
  webDir: './dist/',
  server: {
    url: '',
    cleartext: true,
    allowNavigation: [''],
    androidScheme: '',
  },
  plugins: {
    Camera: {
      allowEditing: false,
      resultType: 'uri',
      source: 'prompt',
      webUseInput: true,
    },
  },
};

export default config;
