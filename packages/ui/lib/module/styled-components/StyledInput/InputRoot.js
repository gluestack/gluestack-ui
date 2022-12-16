import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';
export default styled(
  View,
  {
    baseStyle: {
      style: {
        bg: '$white',
        borderWidth: 2,
        borderColor: '$purple.500',
        borderRadius: 10,
        // flexDirection: 'row',
      },

      state: {
        invalid: {
          style: {
            bg: '$blue.800',
          },
        },
      },
    },
  },
  {}
);
//# sourceMappingURL=InputRoot.js.map
