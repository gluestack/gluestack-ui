import { Image } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Image,
  {
    width: '100%',
    height: '100%',
    // @ts-ignore
    borderRadius: '$full',
    position: 'absolute',
  },
  {
    componentName: 'AvatarImage',
  } as const
);
