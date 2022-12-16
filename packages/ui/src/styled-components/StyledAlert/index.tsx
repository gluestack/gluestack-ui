import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        bg: '$green100',
        p: '$3',
        space: '$3',
        // @ts-ignore
        borderRadius: '$sm',
      },
    },
    variants: {
      'subtle': {
        style: {
          bg: '$blue100',
          // @ts-ignore
          _icon: {
            color: '$blue700',
          },
        },
      },
      'solid': {
        style: {
          bg: '$blue100',
          // @ts-ignore
          descendants: {
            _icon: {
              style: {
                color: '$gray.50',
              },
            },
          },
        },
      },
      'left-accent': {
        style: {
          // @ts-ignore
          borderLeftWidth: '$4',
          bg: '$blue100',
          descendants: {
            _icon: {
              style: {
                color: '$blue700',
              },
            },
          },
          borderLeftColor: '$blue700',
        },
      },
      'top-accent': {
        style: {
          // @ts-ignore
          borderTopWidth: '$4',
          bg: '$blue100',
          descendants: {
            _icon: {
              style: {
                color: '$blue700',
              },
            },
          },
          borderTopColor: '$blue700',
        },
      },
      'outline': {
        style: {
          // @ts-ignore
          borderWidth: '$1',
          descendants: {
            _icon: {
              style: {
                color: '$blue700',
              },
            },
          },
          borderColor: '$blue700',
        },
      },
      'outline-light': {
        style: {
          // @ts-ignore
          borderWidth: '$1',
          descendants: {
            _icon: {
              style: {
                color: '$blue700',
              },
            },
          },
          borderColor: '$blue400',
        },
      },
    },
    defaultProps: {
      variant: 'subtle',
    },
  },
  { ancestorStyle: ['_icon'] }
);
