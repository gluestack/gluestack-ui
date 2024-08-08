import React from 'react';
import { Image, Center } from '../../core-components/nativewind';
// import { useBreakpointValue } from '@gluestack-ui/themed';
// import { useBreakpointValue } from '@/components/hooks/use-break-point-value';
//@ts-ignore
import { useBreakpointValue } from '@/hooks/useBreakPointValue';

const AnatomyImage = () => {
  // const source = useBreakpointValue({
  //   default: 'https://ibb.co/F3bdXr7',
  //   md: 'https://ibb.co/Z1R8HR2',
  // });

  const source = useBreakpointValue({
    default: '/assets/alert_mobile.svg',
    md: '/assets/alert_web.svg',
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
