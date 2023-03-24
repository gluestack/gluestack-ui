import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$textLight900',
    fontSize: '$lg',
    fontWeight: '$bold',
    bg: '$backgroundLight0',
    px: '$3',
    _dark: {
      color: '$textDark50',
    },
  },
  { ancestorStyle: ['_text'] }
);
