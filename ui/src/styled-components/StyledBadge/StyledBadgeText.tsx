import { Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Text,
  {
    baseStyle: {
      style: {
        p: 10,
        fontWeight: '500',
        fontSize: 12,
      },
    },
  },
  { ancestorStyle: ['_text'] }
);
