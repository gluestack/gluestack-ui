// @ts-nocheck
import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    flexDirection: 'row-reverse',
    position: 'relative',
    _avatar: {
      ml: -10,
      borderWidth: 2,
      borderColor: 'white',
      _dark: {
        borderColor: '$trueGray.900',
      },
    },
  },
  {
    descendantStyle: ['_avatar'],
  }
);
