import { styled } from '../../styled';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    fontWeight: '$medium',
    fontFamily: '$body',
    color: '$textLight500',
    _dark: {
      color: '$textDark400',
    },
  },
  { ancestorStyle: ['_labelText'] }
);
