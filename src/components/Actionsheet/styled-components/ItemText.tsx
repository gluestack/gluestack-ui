import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    mx: '$2',
    fontSize: '$md',
    fontFamily: '$body',
    fontWeight: '$normal',
    lineHeight: '$md',
    color: '$textLight800',
    _dark: {
      color: '$textDark100',
    },
  },
  { ancestorStyle: ['_text'] }
);
