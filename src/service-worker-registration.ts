import { registerValidSW } from './utils/register-valid-sw';
import { checkValidServiceWorker } from './utils/check-valid-service-worker';
import { Config } from './types/config-type';

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

export function register(config?: Config): void {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      (async (): Promise<void> => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

        try {
          if (isLocalhost) {
            await checkValidServiceWorker(swUrl, config);
          } else {
            registerValidSW(swUrl, config);
          }
        } catch (err) {
          console.error('Error during service worker registration:', (err as Error).message);
        }
      })().catch((err: unknown) => {
        console.error('Unhandled error during service worker async block:', (err as Error).message);
      });
    });
  }
}

export async function unregister(): Promise<void> {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.ready;
      await registration.unregister();
    } catch (err) {
      console.error('Failed to unregister service worker:', (err as Error).message);
    }
  }
}
