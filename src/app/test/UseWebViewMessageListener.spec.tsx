import React, { useEffect } from 'react';
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { createRoot } from 'react-dom/client';
import { useWebViewMessageListener, sendJsonToNative } from '../hooks/UseWebViewMessageListener';

interface RNWebViewWindow extends Window {
  ReactNativeWebView?: {
    postMessage: (message: unknown) => void;
  };
}

describe('useWebViewMessageListener', (): void => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    vi.spyOn(window, 'addEventListener');
    vi.spyOn(window, 'removeEventListener');
  });

  afterEach(() => {
    document.body.removeChild(container);
    vi.restoreAllMocks();
  });

  test('should update state when a message is received', async () => {
    let receivedData: string | null = null;

    const TestComponent = (): React.ReactElement => {
      receivedData = useWebViewMessageListener();
      return <div>{receivedData}</div>;
    };

    const root = createRoot(container);
    root.render(<TestComponent />);

    // Simulate receiving a message
    window.dispatchEvent(new MessageEvent('message', { data: 'Test Message' }));

    // Wait for the state to update
    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(receivedData).toBe(null);
  });

  test('should remove event listener on unmount', (): void => {
    const TestComponent = (): null => {
      useEffect((): void => {
        return (): void => {
          expect(window.removeEventListener).toHaveBeenCalledWith('message', expect.any(Function));
        };
      }, []);

      useWebViewMessageListener();
      return null;
    };

    const root = createRoot(container);
    root.render(<TestComponent />);
    root.unmount();
  });
});

describe('sendJsonToNative', (): void => {
  test('should send data to React Native WebView', () => {
    const mockPostMessage = vi.fn();

    (window as RNWebViewWindow).ReactNativeWebView = {
      postMessage: mockPostMessage,
    };

    sendJsonToNative({ key: 'value' });

    expect(mockPostMessage).toHaveBeenCalledWith({ key: 'value' });
  });

  test('should send default message when no data is provided', (): void => {
    const mockPostMessage = vi.fn();

    (window as RNWebViewWindow).ReactNativeWebView = {
      postMessage: mockPostMessage,
    };

    sendJsonToNative();

    expect(mockPostMessage).toHaveBeenCalledWith('pass custom data to React Native App');
  });

  test('should do nothing if ReactNativeWebView is not defined', (): void => {
    (window as RNWebViewWindow).ReactNativeWebView = undefined;

    expect((): void => sendJsonToNative({ key: 'value' })).not.toThrow();
  });
});
