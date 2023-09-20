import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    fontWeight: '$medium',
    fontFamily: '$body',
    fontSize: '$md',
    lineHeight: '$md',
    color: '$textLight.900',
    _dark: {
      color: '$textDark.50',
    },
  },
  { ancestorStyle: ['_text'] }
);
