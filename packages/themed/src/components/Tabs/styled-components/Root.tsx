import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'Tabs',
  descendantStyle: ['_tabsTrigger', '_tabsList'],
} as const);
