import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'TabsTabList',
  descendantStyle: ['_tab'],
} as const);
