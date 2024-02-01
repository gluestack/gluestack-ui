import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(Pressable, {}, {
  componentName: 'TabsTrigger',
  descendantStyle: ['_titleText', '_icon'],
  ancestorStyle: ['_tabsTrigger'],
} as const);
