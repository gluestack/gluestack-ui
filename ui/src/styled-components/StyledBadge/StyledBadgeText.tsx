import { Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Text,
  {
    baseStyle: { style: { color: '$blue900', bg: '$amber500', p: 10 } },
  },
  { ancestorStyle: ['_text'] }
);
