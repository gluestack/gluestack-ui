import { Text } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  Text,
  {
    baseStyle: { style: { color: '$text.900' } },
  },
  { ancestorStyle: ['_text'] }
);
