import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(View, {}, {
  componentName: 'AvatarGroup',
  descendantStyle: ['_avatar'],
} as const);
