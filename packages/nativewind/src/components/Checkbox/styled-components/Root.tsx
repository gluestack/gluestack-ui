import { Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(Pressable, {}, {
  componentName: 'Checkbox',
  descendantStyle: ['_icon', '_text', '_indicator'],
} as const);
