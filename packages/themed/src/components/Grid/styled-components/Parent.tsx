import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'GridParent',
  ancestorStyle: ['_gridParent'],
  descendantStyle: ['_grid'],
} as const);
