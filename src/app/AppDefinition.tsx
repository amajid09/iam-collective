// DO NOT CHANGE ANYTHING (RENAME)
import React from 'react';
import { FeatureAppDefinition } from '@feature-hub/core';
import { ReactFeatureApp } from '@feature-hub/react';
import App from './App';
import reportWebVitals from '../report-web-vitals';
import { Initialise, initialise, miscTracking } from '@mtnkente/gtm';
import { Metric } from 'web-vitals';

const FeatureHubAppDefinition: FeatureAppDefinition<ReactFeatureApp> = {
  create: ({ config }) => {
    initialise(
      new Initialise({
        consentAds: true,
        consentAnalytics: true,
        consentPreferences: true,
        gtmId: 'gtm_token',
      })
    );

    return {
      render: () => (
        <>
          <App config={config} />
        </>
      ),
    };
  },
};

const sendToAnalytics = ({ id, name, value }: Metric): void => {
  // Assumes the metric name is the same as the event name in Google Analytics
  miscTracking('webVitals', 'reportWebVitals', {
    eventCategory: 'Web Vitals',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // Ensure values are in milliseconds
    eventLabel: id, // Use the Web Vitals ID as the event label
    nonInteraction: true, // Prevents this event from affecting bounce rate
  });
};

// webVital to monitor application performance
reportWebVitals(sendToAnalytics);

export default FeatureHubAppDefinition;
