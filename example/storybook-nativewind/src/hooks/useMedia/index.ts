import { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { getTailwindConfigBreakpoints } from '@/utils/getTailwindConfigBreakpoints';

const breakpoints = getTailwindConfigBreakpoints();

const useMedia = () => {
  const { width } = useWindowDimensions();
  const [media, setMedia] = useState({
    'base': false,
    'sm': false,
    'md': false,
    'lg': false,
    'xl': false,
    '2xl': false,
  });

  useEffect(() => {
    setMedia({
      'base': width >= breakpoints.base,
      'sm': width >= breakpoints.sm,
      'md': width >= breakpoints.md,
      'lg': width >= breakpoints.lg,
      'xl': width >= breakpoints.xl,
      '2xl': width >= breakpoints['2xl'],
    });
  }, [width]);

  return media;
};

export default useMedia;
