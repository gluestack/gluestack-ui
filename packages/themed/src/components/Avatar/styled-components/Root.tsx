import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(View, {}, {
  componentName: 'Avatar',
  descendantStyle: ['_badge', '_text'],
  ancestorStyle: ['_avatar'],
} as const);
