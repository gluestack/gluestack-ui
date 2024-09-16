import React from 'react';
import { Image, Center } from '../../core-components/nativewind';

const UnitoolsImage = () => {
  return (
    <Center>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1725476479171-4728f92dfa9c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
        }}
        alt="unitools-image"
        className="h-52 w-80 mb-6"
      />
    </Center>
  );
};
export default UnitoolsImage;
