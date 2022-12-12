import { styled } from '@gluestack/styled';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    baseStyle: {
      style: {
        bg: '$primary.900',
        p: 4,
      },
    },
  },
  {}
);
