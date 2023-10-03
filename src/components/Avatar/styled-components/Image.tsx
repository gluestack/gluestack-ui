import { Image } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Image,
  {
    w: '100%',
    h: '100%',
    borderRadius: '$full',
    position: 'absolute',
  },
  {
    componentName: 'AvatarImage',
  } as const
);
