import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$textLight800',
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    fontSize: '$sm',
    letterSpacing: '$md',
    lineHeight: '$lg',
    _dark: {
      color: '$textDark100',
    },
  },
  { ancestorStyle: ['_text'] }
);
