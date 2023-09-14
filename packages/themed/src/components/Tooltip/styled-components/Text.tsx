import { Text } from '../../Text';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$red400',
    fontFamily: '$body',
    //@ts-ignore
    userSelect: 'none',
  },
  {
    componentName: 'TooltipText',
    ancestorStyle: ['_text'],
  } as const
);
