//@ts-nocheck

import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$backgroundLight50',
    fontWeight: '$medium',
    fontFamily: '$heading',
    fontStyle: 'normal',
    fontSize: '$xs',
    letterSpacing: '$md',
    lineHeight: '$lg',

    _dark: {
      color: '$backgroundDark900',
    },
  },
  { ancestorStyle: ['_text'] }
);
