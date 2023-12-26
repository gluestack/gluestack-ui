import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(View, {}, {
  componentName: 'FormControl',
  descendantStyle: ['_labelText', '_helperText', '_errorText', '_labelAstrick'],
} as const);
