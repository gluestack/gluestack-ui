import { Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Text,
  {
    baseStyle: { style: { color: '$blue900', h: '$4', w: '$4' } },
  },
  { ancestorStyle: ['_text'] }
);
