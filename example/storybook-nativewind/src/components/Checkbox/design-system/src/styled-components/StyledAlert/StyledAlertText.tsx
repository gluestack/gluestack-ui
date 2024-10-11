import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$text900',
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    fontSize: '$sm',
    letterSpacing: '$md',
    lineHeight: '$lg',
  },
  { ancestorStyle: ['_text'] }
);
