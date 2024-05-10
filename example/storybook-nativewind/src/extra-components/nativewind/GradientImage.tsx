import { Image, Center } from '../../core-components/nativewind';
import React, { useContext } from 'react';
import { LayoutContext } from '@gluestack/design-system';

const GradientImage = () => {
  const { colorMode } = useContext(LayoutContext);

  return (
    <Center>
      <Image
        source={
          colorMode === 'light' ? '/assets/light-lg.svg' : '/assets/dark-lg.svg'
        }
        alt="linear-gradient"
        className="h-64 w-[400px]"
      />
    </Center>
  );
};
export default GradientImage;
