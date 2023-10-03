import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    fontSize: '$xs',
    fontFamily: '$body',
    color: '$error.600',
    _dark: {
      color: '$error.500',
    },
  },
  { ancestorStyle: ['_errorText'] }
);
