import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'Progress',
  descendantStyle: ['_filledTrack'],
} as const);
