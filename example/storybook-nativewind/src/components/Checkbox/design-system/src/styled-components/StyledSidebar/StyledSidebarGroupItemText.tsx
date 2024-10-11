import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';
export default styled(
  Text,
  {
    fontFamily: '$body',
    fontWeight: '$normal',
    fontSize: '$sm',
    lineHeight: 22,
  },
  { ancestorStyle: ['_text'] }
);
