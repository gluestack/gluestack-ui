import React from 'react';
import { Image, Center } from '../../../ui-components';

export const ImageStory = ({
  uri = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
}: any) => {
  return (
    <Center>
      <Image
        size="md"
        source={{
          uri: uri,
        }}
      />
    </Center>
  );
};

export { Image };
