import { Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(Pressable, {}, {
  componentName: 'Radio',
  descendantStyle: ['_icon', '_text', '_indicator'],
  ancestorStyle: ['_radio'],
} as const);
