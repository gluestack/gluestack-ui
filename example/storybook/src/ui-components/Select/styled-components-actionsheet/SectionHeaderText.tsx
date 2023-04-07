import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$red500',
    fontSize: '$md',
    fontWeight: '$bold',
    px: '$6',
    py: '$2',
    _dark: {
      color: '$textDark50',
    },
  },
  {}
);
