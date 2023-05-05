import { styled } from '../../styled';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    fontSize: '$xs',
    fontFamily: '$body',
    color: '$error600',
    ml: '$1',

    _dark: {
      color: '$error500',
    },
  },
  {}
);
