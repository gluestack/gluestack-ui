import { Text } from 'react-native';
import { styled } from 'dank-style';

export default styled(
  Text,
  {
    baseStyle: { style: { color: '$text800' } },
  },
  { ancestorStyle: ['_text'], DEBUG: 'STYLEDBUTTONTEXT' }
);
