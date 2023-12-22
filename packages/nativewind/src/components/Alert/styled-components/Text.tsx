import { Text } from '../../Text';
import { styled } from '@gluestack-style/react';

export default styled(Text, {}, {
  componentName: 'AlertText',
  ancestorStyle: ['_text'],
} as const);
