import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(Pressable, {}, {
  componentName: 'InputSlot',
  descendantStyle: ['_icon'],
} as const);
