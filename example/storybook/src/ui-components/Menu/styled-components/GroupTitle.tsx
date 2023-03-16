import { Text } from 'react-native';
import { styled } from '../../core/styled';

export default styled(
  Text,
  {
    fontSize: '$xs',
    p: '$3',
    color: '$textLight500',
    fontWeight: '$medium',
    _dark: {
      color: '$textDark400',
    },
  },
  {}
);
