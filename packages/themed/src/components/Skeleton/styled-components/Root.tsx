import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'Skeleton',
  ancestorStyle: ['_skeleton'],
  descendantStyle: ['_highlight'],
} as const);
