import { Text } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  Text,
  {
    fontWeight: '$medium',
    fontSize: '$sm',
    // fontFamily: '$heading',
    color: '$textLight800',
    textTransform: 'uppercase',
    letterSpacing: '$md',
    lineHeight: '$md',
    _dark: {
      color: '$textDark100',
    },
  },
  { ancestorStyle: ['_text'] }
);
