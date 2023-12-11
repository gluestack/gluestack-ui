import { get, onChange } from '../core/colorMode';
import { useState, useEffect } from 'react';

/**
 *
 * @returns Current color mode value (light or dark)
 */
export const useColorMode = () => {
  const [currentColorMode, setCurrentColorMode] = useState(get());
  useEffect(() => {
    onChange((colorMode: any) => {
      setCurrentColorMode(colorMode);
    });
    // remove onchage listener on unmount
    () =>
      onChange((colorMode: any) => {
        setCurrentColorMode(colorMode);
      });
  }, []);

  return currentColorMode;
};
