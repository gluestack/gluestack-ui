import { styled } from '../../styled';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    fontFamily: '$body',
  },
  { ancestorStyle: ['_title'] }
);
