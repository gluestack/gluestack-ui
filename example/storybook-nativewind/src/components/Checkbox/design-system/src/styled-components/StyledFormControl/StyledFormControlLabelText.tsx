import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    fontSize: '$sm',
    fontWeight: '$medium',
    color: '$text500',

    _dark: {
      color: '$text400',
    },
  },
  {}
);
