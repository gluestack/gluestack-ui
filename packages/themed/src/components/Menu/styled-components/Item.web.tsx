import { styled } from '@gluestack-style/react';
import { LI } from '@expo/html-elements';
export const Item = styled(LI, {}, {
  componentName: 'MenuItem',
  descendantStyle: ['_text'],
} as const);
