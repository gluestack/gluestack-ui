import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    w: 200,
    py: '$2',
    rounded: '$sm',
    bg: '$backgroundLight0',
    shadowColor: '$backgroundLight800',
    //@ts-ignore
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    _dark: {
      bg: '$backgroundDark900',
    },
  },
  {}
);
