import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    width: '$5',
    height: '$5',
    backgroundColor: '$success.600',
    // @ts-ignore
    borderRadius: '$full',
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderColor: '$muted.50',
    _dark: {
      borderColor: '$muted.900',
    },
    // @ts-ignore
    borderWidth: 2,
    zIndex: 900,
  },
  {
    componentName: 'AvatarBadge',
    ancestorStyle: ['_badge'],
  } as const
);
