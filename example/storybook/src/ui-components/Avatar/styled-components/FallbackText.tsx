import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$textLight0',
    fontFamily: '$body',
    fontWeight: '$semibold',
    fontSize: '$xl',
    overflow: 'hidden',
    textTransform: 'uppercase',
  },
  { ancestorStyle: ['_text'] }
);
