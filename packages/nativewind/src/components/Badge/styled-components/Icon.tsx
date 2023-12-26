import { styled } from '@gluestack-style/react';
import { View as StyledIcon } from 'react-native';

export default styled(StyledIcon, {}, {
  componentName: 'BadgeIcon',
  ancestorStyle: ['_icon'],
} as const);
