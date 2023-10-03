import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$body',
    color: '$muted.900',
    _dark: {
      color: '$muted.50',
    },
  },
  { ancestorStyle: ['_labelText'] }
);
