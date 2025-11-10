import React from 'react';
import ReactDOM from 'react-dom/client';
import { FeatureAppContainer, FeatureHubContextProvider } from '@feature-hub/react';
import { createFeatureHub } from '@feature-hub/core';
import { defineExternals, loadAmdModule } from '@feature-hub/module-loader-amd';
import FeatureHubAppDefinition from './app/AppDefinition';
import { loadFederatedModule } from '@feature-hub/module-loader-federation';
import { externals } from './app/externals/ExternalLibs';

defineExternals(externals);

const { featureAppManager } = createFeatureHub('main:integrator', {
  moduleLoader: async (url, moduleType) =>
    moduleType === 'federated' ? loadFederatedModule(url) : loadAmdModule(url),
  providedExternals: {
    react: process.env.REACT_VERSION as string,
    '@feature-hub/react': process.env.FEATURE_HUB_REACT_VERSION as string,
  },
  featureServiceDefinitions: [],
  featureServiceDependencies: {},
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <FeatureHubContextProvider value={{ featureAppManager }}>
    <FeatureAppContainer
      featureAppDefinition={FeatureHubAppDefinition}
      featureAppId={'welceom:welcome-fa-template'}
      config={{ data: 'custom data, json object' }}
    />
  </FeatureHubContextProvider>
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function handleServiceWorkerLoad(): void {
    (async function registerServiceWorker(): Promise<void> {
      const { register } = await import('./service-worker-registration');
      register();
    })().catch((err) => {
      console.error('Service worker registration failed:', err);
    });
  });
}
