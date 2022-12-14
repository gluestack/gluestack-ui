import { Text } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  Text,
  {
    baseStyle: { style: { color: '$blue.900', bg: '$amber.500', p: 10 } },
  },
  {}
);
