import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    h: '$full',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: '$2',
    justifyContent: 'space-around',
    px: '$3',
  },
  {}
);
