import { Text } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  Text,
  {
    baseStyle: { style: { color: '$blue.900', h: '$4', w: '$4' } },
  },
  { ancestorStyle: ['_text'] }
);
