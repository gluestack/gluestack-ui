import { View } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  View,
  {
    baseStyle: {},
  },
  {
    descendentStyle: ['_text'],
  }
);
