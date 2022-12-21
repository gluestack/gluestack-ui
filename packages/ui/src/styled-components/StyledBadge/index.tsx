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
        py: '$0.5',
      },
    },
    variants: {
      solid: {
        style: {
          bg: '$blue600',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$text50',
            },
          },
          _icon: {
            style: {
              color: '$text50',
            },
          },
        },
      },
      subtle: {
        style: {
          bg: '$blue100',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$text900',
            },
          },
          _icon: {
            style: {
              color: '$text900',
            },
          },
        },
      },
      outline: {
        style: {
          bg: '$blue100',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$text600',
            },
          },
          _icon: {
            style: {
              color: '$text600',
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
