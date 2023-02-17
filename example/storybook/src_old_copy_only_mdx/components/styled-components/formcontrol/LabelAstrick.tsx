// import { Text } from '@universa11y/ui';
import { styled } from '@dank-style/react';
import { Text } from 'react-native';
export default styled(
  Text,
  {
    color: '$error600',

    _dark: {
      color: '$error500',
    },
  },
  {}
);
