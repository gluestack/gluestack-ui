import React from 'react';
import { Image } from '@/components/ui/image';
import { Center } from '@/components/ui/center';
const GradientImage = () => {
  return (
    <Center>
      <Image
        source={'/assets/light-lg.svg'}
        alt="linear-gradient"
        className="h-64 w-96 dark:hidden"
      />
      <Image
        source={'/assets/dark-lg.svg'}
        alt="linear-gradient"
        className="h-64 w-96 dark:block hidden"
      />
    </Center>
  );
};
export default GradientImage;
