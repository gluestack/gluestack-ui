import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'GridContainer',
  ancestorStyle: ['_gridContainer'],
  descendantStyle: ['_grid'],
} as const);
