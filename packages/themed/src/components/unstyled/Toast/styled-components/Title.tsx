import { Text } from '../../Text';
import { styled } from '@gluestack-style/react';

export default styled(Text, {}, {
  componentName: 'ToastTitle',
  ancestorStyle: ['_title'],
} as const);
