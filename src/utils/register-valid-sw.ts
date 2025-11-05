import { Config } from '../types/config-type';

export function registerValidSW(swUrl: string, config?: Config): void {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration: ServiceWorkerRegistration): void => {
      registration.onupdatefound = (): void => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }

        installingWorker.onstatechange = (): void => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // App has been updated - call onUpdate if defined
              config?.onUpdate?.(registration);
            } else {
              // App is cached for offline use - call onSuccess if defined
              config?.onSuccess?.(registration);
            }
          }
        };
      };
    })
    .catch((error: unknown): void => {
      console.error('Error during service worker registration:', error);
    });
}
