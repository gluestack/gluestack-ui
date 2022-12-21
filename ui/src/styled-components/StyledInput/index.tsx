import { styled } from '@gluestack/ui-styled';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    baseStyle: {
      style: {
        px: '$4',
        py: '$3',
        color: '$darkText',
      },

      state: {
        focus: {
          style: {
            outlineColor: '$primary600',
          },
        },
      },
    },
    sizes: {
      '2xl': { style: { fontSize: 22 } },
      'xl': { style: { fontSize: 20 } },
      'lg': { style: { fontSize: 18 } },
      'md': { style: { fontSize: 16 } },
      'sm': { style: { fontSize: 14 } },
      'xs': { style: { fontSize: 12 } },
    },
  },
  { ancestorStyle: ['_input'] }
);
