import { Image, HStack } from '@gluestack/ui';
import React from 'react';

import Wrapper from '../Wrapper';

export const Example = ({ uri, fallbackSource, ...props }) => {
  return (
    <Wrapper>
      <HStack space="md">
        <Image
          sx={{ style: { w: 100, h: 100 } }}
          source={{
            uri: uri,
          }}
          fallbackSource={{
            uri: fallbackSource,
          }}
        />
        <Image
          sx={{ style: { w: 100, h: 100 } }}
          source={{
            uri: 'broken.link',
          }}
          fallbackSource={{
            uri: fallbackSource,
          }}
        />
      </HStack>
    </Wrapper>
  );
};
