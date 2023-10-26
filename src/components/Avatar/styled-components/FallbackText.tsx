import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$text.50',
    fontFamily: '$body',
    fontWeight: '$semibold',
    // @ts-ignore
    fontSize: '$xl',
    overflow: 'hidden',
    textTransform: 'uppercase',
    _web: {
      cursor: 'default',
    },
  },
  {
    componentName: 'AvatarFallbackText',
    ancestorStyle: ['_text'],
  } as const
);
