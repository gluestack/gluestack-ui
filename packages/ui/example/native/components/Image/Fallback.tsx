import { Image } from '@gluestack/ui';
import React from 'react';

import Wrapper from '../Wrapper';

export const Example = ({ ...props }) => {
  return (
    <Wrapper>
      <Image
        sx={{
          style: {
            w: 100,
            h: 100,
          },
        }}
        source={{
          uri: 'https://images.unspla',
        }}
        fallbackSource={{
          uri: 'https://www.w3schools.com/css/img_lights.jpg',
        }}
      />
    </Wrapper>
  );
};
