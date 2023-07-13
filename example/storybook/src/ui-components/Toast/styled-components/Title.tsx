import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    fontWeight: '$medium',
    fontFamily: '$body',
    fontSize: '$md',
    lineHeight: '$md',
  },
  { ancestorStyle: ['_text'] }
);
