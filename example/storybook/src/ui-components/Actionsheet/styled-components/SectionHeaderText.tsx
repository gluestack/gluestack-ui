import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$textLight900',
    fontSize: '$lg',
    fontWeight: '$bold',
    bg: '$backgroundLight100',
    px: '$5',
    py: '$2',
    _dark: {
      color: '$textDark50',
    },
  },
  { ancestorStyle: ['_text'] }
);
