import { styled } from 'dank-style';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    baseStyle: {
      style: {
        px: '$4',
        py: '$3',
        color: '$darkText',
        fontSize: 16,
      },
      colorMode: {
        dark: {
          style: {
            color: '$lightText',
          },
        },
      },
    },
  },
  { ancestorStyle: ['_input'], resolveProps: ['placeholderTextColor'] }
);
