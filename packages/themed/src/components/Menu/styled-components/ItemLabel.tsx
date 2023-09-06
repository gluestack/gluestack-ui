import { Text } from '../../Text';
import { styled } from '../../styled';

export const Label = styled(Text, {}, {
  componentName: 'MenuLabel',
  ancestorStyle: ['_text'],
} as const);
