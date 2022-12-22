//@ts-nocheck

import { Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Text,
  {
    baseStyle: {
      style: {
        color: '$text50',
        fontWeight: '$normal',
        fontFamily: '$body',
        fontStyle: 'normal',
        fontSize: '$xs',
        letterSpacing: '$md',
        lineHeight: '$lg',
      },
    },
    variants: {
      modalHeader: {
        style: {
          fontSize: '$md',
          fontWeight: '$semibold',
          lineHeight: '$sm',
        },
      },
    },
  },
  {}
);
