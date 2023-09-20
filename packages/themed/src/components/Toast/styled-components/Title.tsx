import { Text } from '../../Text';
import { styled } from '@gluestack-style/react';

export default styled(Text, {}, {
  componentName: 'ToastTitle',
  ancestorStyle: ['_text'],
} as const);
