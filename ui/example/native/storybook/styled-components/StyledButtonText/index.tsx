// import { Text } from '@gluestack/ui';
import { styled } from '@gluestack/styled';
import { Text } from 'react-native';
export default styled(
  Text,
  {
    baseStyle: { style: { color: '$text.900', p: 10 } },
  },
  { ancestorStyle: ['_text'] }
);
