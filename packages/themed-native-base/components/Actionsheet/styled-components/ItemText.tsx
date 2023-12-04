import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    mx: '$2',
    // @ts-ignore
    fontSize: '$md',
    fontFamily: '$body',
    fontWeight: '$normal',
    // @ts-ignore
    lineHeight: '$md',
    color: '$textLight.800',
    _dark: {
      color: '$textDark.100',
    },
  },
  { ancestorStyle: ['_text'] }
);
