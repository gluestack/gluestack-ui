import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    borderRadius: '$full',
    zIndex: -1,
  },
  {
    componentName: 'SliderThumbInteraction',
  } as const
);
