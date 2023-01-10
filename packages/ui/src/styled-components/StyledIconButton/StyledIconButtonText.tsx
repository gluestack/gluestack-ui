import { styled } from 'dank-style';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    baseStyle: { style: { color: '$text800' } },
  },
  { ancestorStyle: ['_text'] }
);
