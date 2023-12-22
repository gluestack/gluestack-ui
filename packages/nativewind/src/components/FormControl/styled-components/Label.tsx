import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'FormControlLabel',
  descendantStyle: ['_labelText'],
} as const);
