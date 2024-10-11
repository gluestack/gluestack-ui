import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    fontWeight: '$semibold',
    color: '$text400',
    _dark: {
      color: '$text500',
    },
  },
  {
    ancestorStyle: ['_text'],
  }
);
