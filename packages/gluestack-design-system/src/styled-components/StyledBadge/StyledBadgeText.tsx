import { Text } from 'react-native';
import { styled } from 'dank-style';

export default styled(
  Text,
  {
    baseStyle: {
      style: {
        fontWeight: '500',
        fontSize: 12,
        color: '$white',
        textTransform: 'uppercase',
      },
    },
  },
  { ancestorStyle: ['_text'] }
);
