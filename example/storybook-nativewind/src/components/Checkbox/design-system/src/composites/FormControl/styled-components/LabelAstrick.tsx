// import { Text } from '@gluestack-ui/ui';
import { styled } from '@gluestack-style/react';
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
