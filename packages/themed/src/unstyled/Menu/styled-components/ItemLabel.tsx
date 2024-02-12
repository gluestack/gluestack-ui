import { Text } from '../../Text';
import { styled } from '@gluestack-style/react';

export const Label = styled(Text, {}, {
  componentName: 'MenuLabel',
  ancestorStyle: ['_text'],
} as const);
