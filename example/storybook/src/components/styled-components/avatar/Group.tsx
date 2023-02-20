import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    flexDirection: 'row',
    position: 'relative',
    _avatar: {
      ml: '-10px',
    },
  },
  {
    descendantStyle: ['_avatar'],
  }
);
