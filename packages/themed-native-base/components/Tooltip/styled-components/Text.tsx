import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    fontFamily: '$body',
    //@ts-ignore
    userSelect: 'none',
  },
  {
    componentName: 'TooltipText',
    ancestorStyle: ['_text'],
  } as const
);
