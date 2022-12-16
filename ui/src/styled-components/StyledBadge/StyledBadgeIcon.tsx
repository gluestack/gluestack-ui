import { Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Text,
  {
    baseStyle: { style: { color: '$blue900', p: '$1' } },
  },
  { ancestorStyle: ['_text'] }
);
