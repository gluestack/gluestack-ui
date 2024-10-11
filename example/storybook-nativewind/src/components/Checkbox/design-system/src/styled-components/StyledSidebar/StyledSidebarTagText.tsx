import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';
export default styled(
  Text,
  {
    color: '$info600',
    fontSize: '$2xs',
    fontWeight: '$medium',
    fontFamily: 'Inter',
  },
  { ancestorStyle: ['_tagtext'] }
);
