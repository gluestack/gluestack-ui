import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    borderRadius: 9999,
    zIndex: -1,
  },
  {
    componentName: 'SliderThumbInteraction',
  } as const
);
