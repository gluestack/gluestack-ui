import { Image } from '../../../core-components/nativewind';
import React, { useContext } from 'react';
import { LayoutContext } from '@gluestack/design-system';

const GradientImage = () => {
  const { colorMode } = useContext(LayoutContext);

  return (
    <Image
      source={colorMode === 'light' ? 'x' : '/assets/dark-lg.png'}
      alt="linear-gradient"
      // className="h-[30%] w-[50%]"
    />
  );
};
export default GradientImage;
