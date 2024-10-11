import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$blue900',
    bg: '$amber500',
    p: 10,
  },
  { ancestorStyle: ['_text'] }
);
