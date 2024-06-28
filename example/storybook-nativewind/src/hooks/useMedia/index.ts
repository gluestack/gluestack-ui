import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { getTailwindConfigBreakpoints } from '../../utils/getTailwindConfigBreakpoints';

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
    const width = Dimensions.get('window').width;
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
    Dimensions.addEventListener('change', updateMedia);
    return () => Dimensions.removeEventListener('change', updateMedia);
  }, []);

  return media;
};

export default useMedia;
