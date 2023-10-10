import { Text } from '../../Text';
import { styled } from '@gluestack-style/react';

export default styled(Text, {}, {
  componentName: 'ToastDescription',
  ancestorStyle: ['_description'],
} as const);
