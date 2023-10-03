import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    height: '$1',
    width: '$16',
    bg: '$backgroundLight400',
    rounded: '$full',
    _dark: {
      bg: '$backgroundDark500',
    },
  },
  {
    componentName: 'SelectDragIndicator',
  } as const
);
