import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$text.50',
    fontWeight: '$bold',
    fontFamily: '$body',
    fontSize: '$md',
    lineHeight: '$md',
  },
  { ancestorStyle: ['_title'] }
);
