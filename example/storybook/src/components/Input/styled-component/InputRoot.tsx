import { styled } from '@dank-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        // bg: '$white',
        borderWidth: 1,
        borderColor: '$muted300',
        borderRadius: 4,
        // bg: '$red100',
        // flexDirection: 'row',
      },
      platform: {
        web: {
          descendants: {
            _input: {
              style: {
                outlineWidth: '0',
                outline: 'none',
                cursor: 'auto',
              },
            },
          },
        },
      },
      descendants: {
        _input: {
          colorMode: {
            dark: {
              style: {
                color: '$lightText',
              },
            },
          },
        },
      },

      state: {
        hover: {
          style: { borderColor: '$primary600' },
        },
        focus: {
          style: {
            borderColor: '$primary600',
            bg: 'transparent',
            boxShadow: `0 0 0 1px #9333ea`,
          },
          descendants: {
            _input: {
              style: {},
            },
          },
        },
        disabled: {
          style: { bg: '$muted100' },
          // placeholderTextColor: '$muted700', color token is not getting resolved
          state: {
            hover: {
              style: { borderColor: '$muted300' },
            },
          },
        },
        invalid: {
          style: {
            borderColor: '$error600',
          },
          state: {
            focus: {
              descendants: {
                _input: {
                  style: {
                    outlineColor: '$error600',
                  },
                },
              },
            },
          },
        },
      },
    },
    variants: {
      rounded: {
        style: {
          borderRadius: 999,
        },
        descendants: {
          _input: {
            style: {
              borderRadius: 999,
            },
          },
        },
      },
      filled: {
        style: {
          borderWidth: 1,
          bg: '$muted100',
          borderColor: '$muted100',
        },
        colorMode: {
          dark: {
            style: {
              bg: '$muted800',
              borderColor: '$muted800',
            },
          },
        },
      },

      underlined: {
        style: {
          borderWidth: 0,
          borderRadius: 0,
          pl: '0',
          borderBottomWidth: 1,
        },
        state: {
          focus: {
            style: {
              borderColor: '$primary600',
              boxShadow: `0 1px 0 0 #9333ea`,
            },
          },
        },
        descendants: {
          _input: {
            style: {
              //@ts-ignore
              outlineWidth: 0,
            },
          },
        },
      },
      unstyled: {
        style: {
          borderWidth: 0,
        },
        descendants: {
          _input: {
            style: {
              //@ts-ignore
              outlineWidth: 0,
            },
          },
        },
        state: {
          focus: {
            style: {
              boxShadow: `0 0 0 0`,
            },
          },
        },
      },
    },
    sizes: {
      '2xl': { descendants: { _input: { style: { fontSize: 22 } } } },
      'xl': { descendants: { _input: { style: { fontSize: 20 } } } },
      'lg': { descendants: { _input: { style: { fontSize: 18 } } } },
      'md': { descendants: { _input: { style: { fontSize: 16 } } } },
      'sm': { descendants: { _input: { style: { fontSize: 14 } } } },
      'xs': { descendants: { _input: { style: { fontSize: 12 } } } },
    },
  },
  { descendantStyle: ['_input'], DEBUG: 'INPUT' }
);
