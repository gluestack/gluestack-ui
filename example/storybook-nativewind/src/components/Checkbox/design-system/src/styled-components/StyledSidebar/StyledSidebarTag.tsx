import { styled } from '@gluestack-style/react';
import { View } from 'react-native';
export default styled(
  View,
  {
    px: '$1',
    py: '$0.5',
    ml: '$2',
    bg: '$backgroundLightInfo',
    borderRadius: '$xs',
    _tagtext: {
      color: '$info600',
      fontSize: '$2xs',
    },
    _dark: {
      bg: '$backgroundDarkInfo',
    },
    variants: {
      variant: {
        alpha: {
          bg: '$backgroundLightInfo',
          _tagtext: { color: '$info600' },
          _dark: {
            bg: '$backgroundDarkInfo',
            _tagtext: { color: '$info400' },
          },
        },
        beta: {
          bg: '$backgroundLightSuccess',
          _tagtext: { color: '$success600' },
          _dark: {
            bg: '$backgroundDarkSuccess',
            _tagtext: { color: '$success400' },
          },
        },
      },
    },
  },
  { descendantStyle: ['_tagtext'] }
);
