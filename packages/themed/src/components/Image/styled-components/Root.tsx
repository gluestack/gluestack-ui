import { Image } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Image,
  {},
  {
    componentName: 'Image',
    resolveProps: ['tintColor'],
  } as const,
  {
    propertyTokenMap: {
      tintColor: 'colors',
    },
  }
);
