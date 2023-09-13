import { Image } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Image,
  {
    w: '$full',
    h: '$full',
    borderRadius: '$full',
    position: 'absolute',
  },
  {
    componentName: 'AvatarImage',
  } as const
);
