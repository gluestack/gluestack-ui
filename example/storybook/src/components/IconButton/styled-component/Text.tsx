import { Text } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  Text,
  {
    baseStyle: { style: { color: '$white' } },
  },
  { ancestorStyle: ['_text'], DEBUG: 'STYLEDBUTTONTEXT' }
);
