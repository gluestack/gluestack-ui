import { Text } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  Text,
  {
    baseStyle: { style: { color: '$blue.900', p: '$1' } },
  },
  { ancestorStyle: ['_text'] }
);
