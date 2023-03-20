import { styled } from '../../styled';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    fontSize: '$xs',
    color: '$text500',

    _dark: {
      color: '$txet400',
    },
  },
  {}
);
