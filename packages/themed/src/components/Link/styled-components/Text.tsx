import { Text } from '../../Text';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    textDecorationLine: 'underline',
    color: '$info700',
    _dark: {
      color: '$info300',
    },
  },
  {
    componentName: 'LinkText',
    ancestorStyle: ['_text'],
  } as const
);
