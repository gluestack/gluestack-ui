import { styled } from '../../styled';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    color: '$text800',
    fontFamily: '$body',
  },
  { ancestorStyle: ['_text'] }
);
