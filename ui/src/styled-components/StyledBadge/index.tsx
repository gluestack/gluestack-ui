import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        px: '$2',
        py: '$1',
      },
    },
    variants: {
      solid: {
        style: {
          bg: '$blue.600',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$text.50',
            },
          },
          _icon: {
            style: {
              color: '$text.50',
            },
          },
        },
      },
      subtle: {
        style: {
          bg: '$blue.100',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$text.900',
            },
          },
          _icon: {
            style: {
              color: '$text.900',
            },
          },
        },
      },
      outline: {
        style: {
          bg: '$blue.100',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$text.900',
            },
          },
          _icon: {
            style: {
              color: '$text.900',
            },
          },
        },
      },
    },
  },
  {
    descendentStyle: ['_text'],
  }
);
