//@ts-nocheck

import { Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Text,
  {
    baseStyle: {
      style: {
        color: '$text900',
        fontWeight: '$normal',
        fontFamily: '$body',
        fontStyle: 'normal',
        fontSize: '$sm',
        letterSpacing: '$md',
        lineHeight: '$lg',
      },
    },
  },
  { ancestorStyle: ['_text'] }
);
