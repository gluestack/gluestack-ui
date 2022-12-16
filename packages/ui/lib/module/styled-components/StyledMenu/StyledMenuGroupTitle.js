import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';
export default styled(
  View,
  {
    baseStyle: {
      style: {
        px: 12,
        py: 8,
      },
      descendants: {
        _text: {
          style: {
            color: '$text.50',
          },
        },
      },
    },
  },
  {
    descendentStyle: ['_text'],
  }
);
//# sourceMappingURL=StyledMenuGroupTitle.js.map
