import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    mx: '$2',
    fontSize: '$md',
    fontWeight: '$normal',
    color: '$textLight900',
    _dark: {
      color: '$textDark50',
    },
  },
  { ancestorStyle: ['_text'] }
);
