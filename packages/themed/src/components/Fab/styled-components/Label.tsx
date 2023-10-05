import { styled } from '@gluestack-style/react';
import { Text } from '../../Text';

export default styled(Text, {}, {
  componentName: 'FabLabel',
  ancestorStyle: ['_text'],
} as const);
