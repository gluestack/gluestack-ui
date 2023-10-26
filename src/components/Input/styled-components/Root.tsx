import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    //@ts-ignore
    'fontFamily': '$body',
    // @ts-ignore
    'borderRadius': '$sm',
    'flexDirection': 'row',
    'alignItems': 'center',
    'overflow': 'hidden',
    ':disabled': {
      opacity: 0.4,
      _web: {
        disabled: true,
        cursor: 'not-allowed',
      },
    },
    '_web': {
      outlineWidth: '$0',
      overflow: 'auto',
      // @ts-ignore
      lineHeight: '$lg',
      outline: 'none',
      cursor: 'auto',
    },
    '_input': {
      props: {
        placeholderTextColor: '$text.400',
      },
      color: '$text.900',
    },
    'borderColor': '$muted.300',
    ':hover': {
      borderColor: '$primary.600',
    },
    ':invalid': {
      'borderColor': '$error.600',
      ':hover': { borderColor: '$error.600' },
      '_web': {
        outlineWidth: '$0',
        boxShadow: `0 0 0 1px $error.600`,
      },
    },
    ':focus': {
      'borderColor': '$primary.600',
      ':hover': { borderColor: '$primary.600' },
      '_input': {
        outlineWidth: '$0',
      },
      '_web': {
        outlineWidth: '$0',
        boxShadow: `0 0 0 1px $primary.600`,
      },
      ':invalid': {
        '_web': {
          outlineWidth: '$0',
          boxShadow: `0 0 0 1px $error.600`,
        },
        'borderColor': '$error.600',
        ':hover': { borderColor: '$error.600' },
      },
      ':disabled': {
        '_input': {
          props: {
            placeholderTextColor: '$muted.700',
          },
        },
        ':hover': {
          borderColor: '$muted.300',
        },
      },
    },
    '_dark': {
      'flexDirection': 'row',
      'alignItems': 'center',
      // justifyContent: 'space-between',
      'overflow': 'hidden',
      '_input': {
        props: {
          placeholderTextColor: '$text.600',
        },
        color: '$text.50',
      },
      'borderColor': '$muted.700',
      ':hover': {
        borderColor: '$primary.500',
      },
      ':focus': {
        'borderColor': '$primary.500',
        ':hover': { borderColor: '$primary.500' },
        '_web': {
          outlineWidth: '0',
          boxShadow: `0 0 0 1px $primary.500`,
        },
      },
      ':invalid': {
        'borderColor': '$error.500',
        '_web': {
          outlineWidth: '0',
          boxShadow: `0 0 0 1px $error.500`,
        },
        ':hover': { borderColor: '$error.500' },
      },
      '_ios': {
        selectionColor: '$warmGray.50',
      },
      '_android': {
        selectionColor: '$warmGray.50',
      },
      ':disabled': {
        '_input': {
          props: {
            placeholderTextColor: 'text.50',
          },
        },
        ':hover': {
          borderColor: 'muted.700',
        },
      },
    },

    'variants': {
      size: {
        '2xl': {
          // height: '$12',
          _input: {
            // @ts-ignore
            fontSize: '$2xl',
          },
          _icon: {
            height: '$6',
            width: '$6',
          },
        },
        'xl': {
          // height: '$12',
          _input: {
            // @ts-ignore
            fontSize: '$xl',
          },
          _icon: {
            height: '$6',
            width: '$6',
          },
        },
        'lg': {
          // height: '$11',
          _input: {
            // @ts-ignore
            fontSize: '$lg',
          },
          _icon: {
            height: '$5',
            width: '$5',
          },
        },
        'md': {
          // height: '$10',
          _input: {
            // @ts-ignore
            fontSize: '$md',
          },
          _icon: {
            height: '$4',
            width: '$4',
          },
        },
        'sm': {
          // height: '$9',
          _input: {
            // @ts-ignore
            fontSize: '$sm',
          },
          _icon: {
            height: '$3.5',
            width: '$3.5',
          },
        },
        'xs': {
          // height: '$9',
          _input: {
            // @ts-ignore
            fontSize: '$xs',
          },
          _icon: {
            height: '$3',
            width: '$3',
          },
        },
      },
      variant: {
        // @ts-ignore
        rounded: {
          // @ts-ignore
          'borderRadius': '$full',
          // @ts-ignore
          'borderWidth': '$1',
          ':focus': {
            backgroundColor: '$primary.600.alpha0.1',
          },
        },
        // @ts-ignore
        outline: {
          // @ts-ignore
          'borderWidth': '$1',
          ':focus': {
            backgroundColor: '$primary.600.alpha0.1',
          },
        },
        filled: {
          // @ts-ignore
          'borderWidth': '$1',
          ':focus': {
            backgroundColor: '$primary.600.alpha0.1',
          },
          // @ts-ignore
          ':hover': {
            // @ts-ignore
            borderWidth: '$1',
            _disabled: {
              // @ts-ignore
              borderWidth: '$0',
            },
          },
          // @ts-ignore
          'bg': '$muted.100',
          'borderColor': '$muted.100',

          '_dark': {
            backgroundColor: '$muted.800',
            borderColor: '$muted.800',
          },
        },
        // @ts-ignore
        unstyled: {
          // @ts-ignore
          'borderWidth': '$0',
          ':focus': {
            backgroundColor: 'transparent',
          },
          ':invalid': {
            _web: {
              outlineWidth: '$0',
            },
          },
          '_web': {
            ':focus': {
              outlineWidth: '$0',
              boxShadow: 'none',
            },
          },
        },
        // @ts-ignore
        underlined: {
          // @ts-ignore
          'borderWidth': '$0',
          'pl': '$0',
          'borderBottomWidth': '$1',
          ':focus': {
            _web: {
              outlineWidth: '0',
              boxShadow: `0 1px 0 0 $primary.600`,
            },
          },
          ':invalid': {
            _web: {
              outlineWidth: 0,
              boxShadow: `0 1px 0 0 $error.600`,
            },
          },

          '_dark': {
            ':focus': {
              _web: {
                outlineWidth: '0',
                boxShadow: `0 1px 0 0 $primary.500`,
              },
            },
            ':invalid': {
              _web: {
                outlineWidth: 0,
                boxShadow: `0 1px 0 0 $error.500`,
              },
            },
          },
          // @ts-ignore
          'borderRadius': 0,
        },
      },
    },

    'defaultProps': {
      size: 'md',
      variant: 'outline',
    },
  },
  {
    componentName: 'Input',
    descendantStyle: ['_input', '_icon'],
    ancestorStyle: ['_inputBox'],
  } as const
);
