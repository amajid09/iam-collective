import { checkValidServiceWorker } from '../src/utils/check-valid-service-worker';
import { registerValidSW } from '../src/utils/register-valid-sw';
import { describe, test, vi, expect, beforeEach, afterEach } from 'vitest';

vi.mock('../src/utils/register-valid-sw', () => ({
  registerValidSW: vi.fn(),
}));

describe('checkValidServiceWorker', () => {
  const originalLocation = window.location;

  beforeEach(() => {
    // @ts-expect-error override readonly
    delete window.location;
    window.location = { reload: vi.fn() } as unknown as Location;
  });

  afterEach(() => {
    vi.resetAllMocks();
    window.location = originalLocation;
  });

  test('calls unregister and reloads when service worker not found', async () => {
    const mockUnregister = vi.fn().mockResolvedValue(undefined);
    const mockReady = Promise.resolve({ unregister: mockUnregister });
    vi.stubGlobal('navigator', {
      serviceWorker: { ready: mockReady },
    });

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        status: 404,
        headers: { get: () => 'text/html' },
      })
    );

    await checkValidServiceWorker('/test-sw.js');

    expect(mockUnregister).toHaveBeenCalled();
    expect(window.location.reload).toHaveBeenCalled();
  });

  test('calls registerValidSW when service worker is found', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        status: 200,
        headers: { get: () => 'application/javascript' },
      })
    );

    await checkValidServiceWorker('/test-sw.js');

    expect(registerValidSW).toHaveBeenCalledWith('/test-sw.js', undefined);
  });

  test('logs error when fetch fails', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')));

    await checkValidServiceWorker('/test-sw.js');

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'No internet connection found. App is running in offline mode.'
    );

    consoleErrorSpy.mockRestore();
  });
});
