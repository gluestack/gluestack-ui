import React from 'react';
import { Image } from '../../../ui-components';
import Wrapper from '../../Wrapper';

export const ImageStory = ({
  uri = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
}: any) => {
  return (
    <Wrapper>
      <Image
        size="md"
        source={{
          uri: uri,
        }}
      />
    </Wrapper>
  );
};

export { Image };
