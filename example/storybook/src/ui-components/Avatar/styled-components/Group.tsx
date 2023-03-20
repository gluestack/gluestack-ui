import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    flexDirection: 'row',
    position: 'relative',
    _avatar: {
      ml: -10,
    },
  },
  {
    descendantStyle: ['_avatar'],
  }
);
