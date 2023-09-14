import { Text } from '../../Text';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$textLight0',
    _web: {
      userSelect: 'none',
    },
  },
  {
    componentName: 'ButtonText',
    ancestorStyle: ['_text'],
  } as const
);
