import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(View, {}, {
  componentName: 'Alert',
  descendantStyle: ['_icon', '_text'],
} as const);
