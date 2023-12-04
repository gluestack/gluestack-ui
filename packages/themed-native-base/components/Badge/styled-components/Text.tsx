import { AccessibleText as Text } from '../../Text';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    // @ts-ignore
    fontSize: '$xs',
    fontWeight: '$medium',
  },
  {
    componentName: 'BadgeText',
    ancestorStyle: ['_text'],
  } as const
);
