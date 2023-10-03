import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$textLight500',
    fontSize: '$sm',
    fontFamily: '$body',
    fontWeight: '$bold',
    lineHeight: '$xs',
    textTransform: 'uppercase',
    p: '$3',
    _dark: {
      color: '$textDark400',
    },
  },
  {
    ancestorStyle: ['_sectionHeaderBackground'],
  }
);
