import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  { fontSize: '$xs', fontWeight: '$medium' },
  { ancestorStyle: ['_text'] }
);
