import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$textLight900',
    _dark: {
      color: '$textDark50',
    },
    fontWeight: '$medium',
    fontFamily: '$body',
    fontSize: '$md',
    lineHeight: '$md',
  },
  { ancestorStyle: ['_text'] }
);
