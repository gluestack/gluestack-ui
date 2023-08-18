import { styled } from '../../styled';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    fontSize: '$xs',
    fontFamily: '$body',
    color: '$error700',
    ml: '$1',
    _dark: {
      color: '$error400',
    },
  },
  { ancestorStyle: ['_errorText'] }
);
