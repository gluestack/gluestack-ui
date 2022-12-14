import { View } from 'react-native';
import { styled } from '@gluestack/styled';
import { Popper } from '@gluestack/popper';

export default styled(
  Popper,
  {
    baseStyle: {
      style: {
        width: '100%',
        height: '100%',
      },
    },
  },
  {}
);
