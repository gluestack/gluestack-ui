import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(View, {}, {
  componentName: 'AvatarBadge',
  ancestorStyle: ['_badge'],
} as const);
