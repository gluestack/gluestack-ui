import React from 'react';
import { Image, Center } from '../../core-components/nativewind';
import { useColorMode } from '@gluestack-ui/themed';

const GradientImage = () => {
  const colorMode = useColorMode();

  return (
    <Center>
      <Image
        source={
          colorMode === 'light' ? '/assets/light-lg.svg' : '/assets/dark-lg.svg'
        }
        alt="linear-gradient"
        className="h-64 w-96"
      />
    </Center>
  );
};
export default GradientImage;
