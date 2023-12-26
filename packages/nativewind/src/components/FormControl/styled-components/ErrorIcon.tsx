import { styled } from '@gluestack-style/react';
import { View as StyledIcon } from 'react-native';

export default styled(StyledIcon, {}, {
  componentName: 'FormControlErrorIcon',
  ancestorStyle: ['_icon'],
} as const);
