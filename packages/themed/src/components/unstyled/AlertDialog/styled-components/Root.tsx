import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(View, {}, {
  componentName: 'AlertDialog',
  descendantStyle: ['_content'],
} as const);
