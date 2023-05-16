import { styled } from '../../styled';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    color: '$textLight50',
    fontFamily: '$body',
  },
  { ancestorStyle: ['_text'] }
);
