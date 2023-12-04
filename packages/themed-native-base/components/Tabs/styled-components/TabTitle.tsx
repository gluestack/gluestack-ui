import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    fontFamily: '$body',
  },
  { ancestorStyle: ['_title'] }
);
