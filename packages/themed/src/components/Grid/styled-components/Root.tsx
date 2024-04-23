import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'Grid',
  ancestorStyle: ['_grid'],
  descendantStyle: ['_gridItem'],
} as const);
