import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$text900',
    fontSize: '$md',
    fontWeight: '$normal',
  },
  { ancestorStyle: ['_text'] }
);
