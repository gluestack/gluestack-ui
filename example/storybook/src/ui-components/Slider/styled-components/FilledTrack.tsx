import { styled } from '@gluestack-ui/styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    'bg': '$primary600',
    'h': '100%',

    ':focus': {
      outlineWidth: 6,
      outlineColor: '$primary700',
      outlineStyle: 'solid',

      _dark: {
        outlineColor: '$primary300',
      },
    },
    '_dark': {
      bg: '$primary500',
    },
  },
  {}
);
