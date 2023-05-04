import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    fontSize: '$md',
    fontFamily: '$body',
    fontWeight: '$normal',
    color: '$textLight800',
    _dark: {
      color: '$textDark100',
    },
  },
  { ancestorStyle: ['_text'] }
);
