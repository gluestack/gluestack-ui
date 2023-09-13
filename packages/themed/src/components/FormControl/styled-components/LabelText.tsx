import { styled } from '@gluestack-style/react';
import { Text } from '../../Text';

export default styled(
  Text,
  {
    fontWeight: '$medium',
    color: '$textLight900',
    _dark: {
      color: '$textDark50',
    },
  },
  {
    componentName: 'FormControlLabelText',
    ancestorStyle: ['_labelText'],
  } as const
);
