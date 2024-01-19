import React from 'react';
import { Image } from '@custom-ui/themed';

const ImageBasic = ({
  uri = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
}: any) => {
  return (
    <Image
      size="md"
      source={{
        uri: uri,
      }}
    />
  );
};

ImageBasic.description = 'This is a basic Image component example.';

export default ImageBasic;

export { Image };
