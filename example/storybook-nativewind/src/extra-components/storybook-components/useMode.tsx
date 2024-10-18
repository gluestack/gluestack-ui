'use client';
import { useDarkMode } from 'storybook-dark-mode';
export const useMode = () => {
  const isDark = useDarkMode();
  return isDark ? { colorMode: 'dark' } : { colorMode: 'light' };
};
