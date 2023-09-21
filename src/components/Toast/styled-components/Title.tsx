import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$text.50',
    fontWeight: '$bold',
    fontFamily: '$body',
    fontSize: '$md',
    lineHeight: '$md',
  },
  { ancestorStyle: ['_title'] }
);
