import { Text } from '@gluestack/ui';
import { styled } from '@gluestack/styled';

export default styled(
  Text,
  {
    baseStyle: { style: { color: '$blue.900', bg: '$amber.500', p: 10 } },
  },
  { ancestorStyle: ['_text'] }
);
