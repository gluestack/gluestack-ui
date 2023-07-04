import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    p: '$4',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderTopWidth: 1,
    borderColor: '$borderLight300',

    _dark: {
      borderColor: '$borderDark700',
    },
  },
  {}
);
