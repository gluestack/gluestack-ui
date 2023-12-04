import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    mx: '$2',
    fontSize: '$md',
    fontWeight: '$normal',
    color: '$textLight800',
    _dark: {
      color: '$textDark100',
    },
  },
  { ancestorStyle: ['_text'] }
);
