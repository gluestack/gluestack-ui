import { useState, useEffect } from 'react';
import { getTailwindConfigBreakpoints } from '@/utils/getTailwindConfigBreakpoints';

const breakpoints = getTailwindConfigBreakpoints();

const useMedia = () => {
  const [media, setMedia] = useState({
    'base': false,
    'sm': false,
    'md': false,
    'lg': false,
    'xl': false,
    '2xl': false,
  });

  const updateMedia = () => {
    const width = window.innerWidth;
    setMedia({
      'base': width >= breakpoints.base,
      'sm': width >= breakpoints.sm,
      'md': width >= breakpoints.md,
      'lg': width >= breakpoints.lg,
      'xl': width >= breakpoints.xl,
      '2xl': width >= breakpoints['2xl'],
    });
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return media;
};

export default useMedia;
