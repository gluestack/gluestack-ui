import React from 'react';
import { Image, Center } from '../../core-components/nativewind';
// import { useBreakpointValue } from '@gluestack-ui/themed';
import { useBreakpointValue } from '@/components/hooks/use-break-point-value';

const AnatomyImage = () => {
  // const source = useBreakpointValue({
  //   default: 'https://ibb.co/F3bdXr7',
  //   md: 'https://ibb.co/Z1R8HR2',
  // });

  const source = useBreakpointValue({
    default: '/assets/light-lg.svg',
    md: '/assets/dark-lg.svg',
  });

  return (
    <Center>
      <Image
        source={source}
        alt="anatomy-image"
        // className="h-64 w-96"
      />
    </Center>
  );
};
export default AnatomyImage;
