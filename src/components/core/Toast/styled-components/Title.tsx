import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$backgroundLight900',
    _dark: {
      color: '$backgroundDark50',
    },
    fontWeight: '$medium',
    fontFamily: '$body',
    fontSize: '$xs',
    letterSpacing: '$md',
    lineHeight: '$lg',
  },
  { ancestorStyle: ['_text'] }
);
