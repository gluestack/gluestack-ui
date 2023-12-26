import { styled } from '@gluestack-style/react';
import { View as StyledIcon } from 'react-native';

export default styled(StyledIcon, {}, {
  componentName: 'RadioIcon',
  ancestorStyle: ['_icon'],
  resolveProps: ['color'],
} as const);
