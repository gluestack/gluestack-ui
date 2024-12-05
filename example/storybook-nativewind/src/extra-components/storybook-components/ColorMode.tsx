import { useDarkMode } from '@/src/components/hooks/useDarkMode';
import React from 'react';
import { Platform } from 'react-native';

export const useMode = () => {
  let value = false;

  if (Platform.OS === 'web') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    value = useDarkMode();
  }
  const [isDark] = React.useState(false);

  function getColorMode() {
    //@ts-ignore
    if (Platform.OS === 'web') {
      return value ? 'dark' : 'light';
    } else {
      return isDark ? 'dark' : 'light';
    }
  }
  return {
    colorMode: getColorMode(),
  };
};
