import { View } from 'react-native';
import { styled } from 'dank-style';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        mr: 8,
      },
    },
  },
  { ancestorStyle: ['_icon'] }
);
