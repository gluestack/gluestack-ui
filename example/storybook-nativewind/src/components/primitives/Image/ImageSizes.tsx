import { Image } from '@custom-ui/themed';
import { VStack } from '@custom-ui/themed';
import React from 'react';

const ImageSizes = ({
  uri = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  fallbackSource = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
  ...props
}: any) => {
  return (
    <VStack space="md" alignItems="center">
      {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((size, index) => (
        <Image
          source={{
            uri: uri,
          }}
          size={size}
          borderRadius={'$full'}
          fallbackSource={{
            uri: fallbackSource,
          }}
          key={index}
          {...props}
        />
      ))}
    </VStack>
  );
};

export default ImageSizes;

export { Image, VStack };
