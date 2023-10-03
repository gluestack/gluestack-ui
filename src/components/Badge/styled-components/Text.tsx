import { AccessibleText as Text } from '../../Text';
import { styled } from '@gluestack-style/react';

export default styled(Text, { fontSize: '$xs', fontWeight: '$medium' }, {
  componentName: 'BadgeText',
  ancestorStyle: ['_text'],
} as const);
