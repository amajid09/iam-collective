// DO NOT CHANGE ANYTHING (RENAME)
import React from 'react';
import { FeatureAppDefinition } from '@feature-hub/core';
import { ReactFeatureApp } from '@feature-hub/react';
import App from './App';

const FeatureHubAppDefinition: FeatureAppDefinition<ReactFeatureApp> = {
  create: ({ config }) => {
    return {
      render: () => (
        <>
          <App config={config} />
        </>
      ),
    };
  },
};

export default FeatureHubAppDefinition;
