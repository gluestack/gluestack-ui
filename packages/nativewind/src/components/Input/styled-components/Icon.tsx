import { styled } from '@gluestack-style/react';
import { View as StyledIcon } from 'react-native';

export default styled(StyledIcon, {}, {
  componentName: 'InputIcon',
  ancestorStyle: ['_icon'],
} as const);
