import React, { useCallback } from 'react';

export interface ScrollHandlerOptions {
  scrollThreshold?: number;
  onScrollStart?: () => void;
  onScrollEnd?: () => void;
}

export interface ScrollHandlerReturn {
  handleScroll: (event: React.UIEvent<HTMLDivElement> | Event) => void;
}

export const useScrollHandler = (
  setIsScrolling: (isScrolling: boolean) => void,
  options: ScrollHandlerOptions = {}
): ScrollHandlerReturn => {
  const { scrollThreshold = 120, onScrollStart, onScrollEnd } = options;

  const handleScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement> | Event): void => {
      const target = event.target as HTMLDivElement;
      const scrollTop = target.scrollTop;

      if (scrollTop > scrollThreshold) {
        setIsScrolling(true);
        onScrollStart?.();
      } else {
        setIsScrolling(false);
        onScrollEnd?.();
      }
    },
    [setIsScrolling, scrollThreshold, onScrollStart, onScrollEnd]
  );

  return { handleScroll };
};
