import { Text } from '../../Text';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    textTransform: 'uppercase',
  },
  {
    componentName: 'BadgeText',
    ancestorStyle: ['_text'],
  } as const
);
