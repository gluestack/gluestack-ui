import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$textLight.500',
    // @ts-ignore
    fontSize: '$sm',
    fontFamily: '$body',
    fontWeight: '$bold',
    // @ts-ignore
    lineHeight: '$xs',
    textTransform: 'uppercase',
    padding: '$3',
    _dark: {
      color: '$textDark400',
    },
  },
  {
    ancestorStyle: ['_sectionHeaderBackground'],
  }
);
