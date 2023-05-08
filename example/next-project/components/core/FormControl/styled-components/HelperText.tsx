import { styled } from '../../styled';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    fontSize: '$xs',
    fontFamily: '$body',
    color: '$text500',
    _dark: {
      color: '$text400',
    },
  },
  {}
);
