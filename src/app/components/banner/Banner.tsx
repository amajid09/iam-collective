/* eslint-disable  */
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import * as backgrounds from '../../assets/background/';
import {
  Author,
  BackgroundImage,
  ImageCard,
  OverlayText,
  Quote,
  SlideWrapper,
} from '../home/HomePage.styled';
interface Image {
  src: string;
  title: string;
}
const Banner: React.FC<{ children: ReactElement }> = ({ children }) => {
  const titles = [
    'You are worthy of love and respect.',
    'You are not alone in your healing.',
    'You deserve peace and safety every day.',
    'Your strength is greater than any challenge.',
    'You deserve peace and safety every day.',
  ];
  const sources = Object.values(backgrounds) as string[];

  const images: Image[] = sources.map((src, i) => ({ src, title: titles[i] }));

  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = (): void => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  };
  const handleTouchStart = (e: React.TouchEvent): void => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent): void => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (): void => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const delta = touchStartX.current - touchEndX.current;
      const swipeThreshold = 50;
      if (delta > swipeThreshold) {
        setActiveIndex((prev) => (prev + 1) % images.length);
      } else if (delta < -swipeThreshold) {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    }
    startAutoSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    startAutoSlide();
    return (): void => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length]);
  return (
    <ImageCard
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      key={images[0].src}
    >
      <SlideWrapper $activeIndex={activeIndex}>
        {images.map((img) => (
          <BackgroundImage key={img.src} src={img.src} alt='Background' />
        ))}
      </SlideWrapper>
      <OverlayText>
        <Quote>{images[activeIndex].title}</Quote>
        <Author>– The author</Author>
        {children}
      </OverlayText>
    </ImageCard>
  );
};

export default Banner;
