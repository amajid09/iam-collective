import { registerValidSW } from './register-valid-sw';
import { Config } from '../types/config-type';

export async function checkValidServiceWorker(swUrl: string, config?: Config): Promise<void> {
  try {
    const response = await fetch(swUrl, {
      headers: { 'Service-Worker': 'script' },
    });

    const contentType = response.headers.get('content-type');

    if (response.status === 404 || (contentType != null && !contentType.includes('javascript'))) {
      const registration = await navigator.serviceWorker.ready;
      await registration.unregister();
      window.location.reload();
    } else {
      registerValidSW(swUrl, config);
    }
  } catch {
    console.error('No internet connection found. App is running in offline mode.');
  }
}
