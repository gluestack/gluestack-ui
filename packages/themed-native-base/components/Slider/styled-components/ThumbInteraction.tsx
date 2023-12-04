import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    // @ts-ignore
    borderRadius: '$full',
    zIndex: -1,
  },
  {
    componentName: 'SliderThumbInteraction',
  } as const
);
