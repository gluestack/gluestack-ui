import { styled } from '@gluestack-style/react';
import { ActivityIndicator } from 'react-native';

export default styled(
  ActivityIndicator,
  {
    defaultProps: {
      color: 'white',
    },
  },
  {
    ancestorStyle: ['_spinner'],
  }
);
