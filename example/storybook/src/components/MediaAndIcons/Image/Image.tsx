import React from 'react';
import { Image } from '../../../ui-components';
import Wrapper from '../../Wrapper';

export const ImageStory = ({
  uri = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
}: // fallbackSource = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
any) => {
  return (
    <Wrapper>
      <Image
        source={{
          uri: uri,
        }}
        bg="$amber300"
        width={200}
        height={200}
      />
    </Wrapper>
  );
};

export { Image };
