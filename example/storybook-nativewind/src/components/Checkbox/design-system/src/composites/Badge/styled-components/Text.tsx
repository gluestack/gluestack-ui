import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    fontWeight: '500',
    fontSize: 12,
    color: '$white',
    textTransform: 'uppercase',
  },
  { ancestorStyle: ['_text'] }
);
