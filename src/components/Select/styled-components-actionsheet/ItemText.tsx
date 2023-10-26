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
    color: '$textLight700',
    _dark: {
      color: '$textDark200',
    },
  },
  { ancestorStyle: ['_text'] }
);
