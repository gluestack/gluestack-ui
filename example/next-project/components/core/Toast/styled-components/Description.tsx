import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$textLight800',
    _dark: {
      color: '$textDark100',
    },
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    fontSize: '$sm',
  },
  { ancestorStyle: ['_text'] }
);
