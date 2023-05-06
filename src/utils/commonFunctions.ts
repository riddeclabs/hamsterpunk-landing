import { useState, useEffect } from 'react';

import { mediaBreakpoints } from '../constants/variables';

export function useTablet() {
  const initValue = window.matchMedia(
    `(max-width: ${mediaBreakpoints.md}px)`
  ).matches;
  const [isTablet, setIsTablet] = useState<boolean>(initValue);

  const handleChange = (event: MediaQueryListEvent) => {
    setIsTablet(event.matches);
  };

  useEffect(() => {
    const mobileMedia = window.matchMedia(
      `(max-width: ${mediaBreakpoints.md}px)`
    );
    mobileMedia.addEventListener('change', handleChange);
    return () => {
      mobileMedia.removeEventListener('change', handleChange);
    };
  }, []);

  return isTablet;
}

export function useMobile() {
  const initValue = window.matchMedia(
    `(max-width: ${mediaBreakpoints.sm}px)`
  ).matches;
  const [isMobile, setIsMobile] = useState<boolean>(initValue);

  const handleChange = (event: MediaQueryListEvent) => {
    setIsMobile(event.matches);
  };

  useEffect(() => {
    const mobileMedia = window.matchMedia(
      `(max-width: ${mediaBreakpoints.sm}px)`
    );
    mobileMedia.addEventListener('change', handleChange);
    return () => {
      mobileMedia.removeEventListener('change', handleChange);
    };
  }, []);

  return isMobile;
}

export function useSmallDesktop() {
  const initValue = window.matchMedia(
    `(max-width: ${mediaBreakpoints.lg}px)`
  ).matches;
  const [isSmallDesktop, setIsSmallDesktop] = useState<boolean>(initValue);

  const handleChange = (event: MediaQueryListEvent) => {
    setIsSmallDesktop(event.matches);
  };

  useEffect(() => {
    const mobileMedia = window.matchMedia(
      `(max-width: ${mediaBreakpoints.lg}px)`
    );
    mobileMedia.addEventListener('change', handleChange);
    return () => {
      mobileMedia.removeEventListener('change', handleChange);
    };
  }, []);

  return isSmallDesktop;
}

export const useMediaValue = <T>(
  mobile: T,
  tablet: T,
  smallDesktop: T,
  desktop: T
): T => {
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isSmallDesktop = useSmallDesktop();
  if (isMobile) return mobile;
  if (isTablet) return tablet;
  if (isSmallDesktop) return smallDesktop;
  return desktop;
};
