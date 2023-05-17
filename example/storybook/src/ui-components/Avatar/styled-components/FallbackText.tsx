import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: 'white',
    fontFamily: '$body',
    fontWeight: '600',
    fontSize: '$xl',
    overflow: 'hidden',
    textTransform: 'uppercase',
  },
  { ancestorStyle: ['_text'] }
);
