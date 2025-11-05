import { useState, useEffect } from 'react';

export const useWebViewMessageListener = (): string | null => {
  const [receivedData, setReceivedData] = useState<string | null>(null);

  useEffect((): void => {
    const handleMessage = (event: MessageEvent): void => {
      setReceivedData(event.data);
    };

    window.addEventListener('message', handleMessage);

    return (): void => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return receivedData;
};

export const sendJsonToNative = (data?: string): void => {
  return (
    window as unknown as { ReactNativeWebView?: { postMessage: (message: string) => void } }
  ).ReactNativeWebView?.postMessage(data ?? 'pass custom data to React Native App');
};
