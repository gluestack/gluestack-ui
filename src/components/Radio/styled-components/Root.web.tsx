import { View } from 'react-native';
import { styled } from '@gluestack-style/react';
import { ColorSchemeResolver } from '../../../plugins/colorScheme/colorScheme';

export default styled(
  View,
  {
    'flexDirection': 'row',
    'justifyContent': 'flex-start',
    'alignItems': 'center',
    //TODO: fix gap typing
    //@ts-ignore
    'gap': '0.5rem',

    // '_indicator': {
    //   bg: '$muted.50',
    //   borderColor: '$muted.400',
    // },
    // ':checked': {
    //   '_indicator': {
    //     borderColor: `$primary.600`,
    //   },
    //   '_icon': {
    //     color: `$primary.600`,
    //   },
    //   ':hover': {
    //     '_indicator': {
    //       borderColor: `$primary.700`,
    //     },
    //     '_icon': { color: `$primary.700` },
    //     ':disabled': {
    //       _indicator: {
    //         borderColor: `$primary.600`,
    //       },
    //       _icon: {
    //         color: `$primary.600`,
    //       },
    //     },
    //   },
    //   ':active': {
    //     _indicator: {
    //       borderColor: `$primary.800`,
    //     },
    //     _icon: { color: `$primary.800` },
    //   },
    // },

    // ':hover': {
    //   '_indicator': {
    //     borderColor: '$muted.500',
    //   },
    //   ':disabled': {
    //     _indicator: {
    //       borderColor: '$muted.400',
    //     },
    //   },
    //   ':checked': {
    //     _indicator: { borderColor: `$primary.600` },
    //   },
    // },

    // ':active': {
    //   _indicator: {
    //     borderColor: '$muted.600',
    //   },
    // },

    // ':invalid': {
    //   _indicator: {
    //     borderColor: '$error.600',
    //   },
    // },

    // // dark mode
    // '_dark': {
    //   '_indicator': {
    //     bg: '$muted.900',
    //     borderColor: '$muted.500',
    //   },

    //   ':checked': {
    //     '_indicator': {
    //       borderColor: `$primary.500`,
    //     },
    //     '_icon': {
    //       color: `$primary.500`,
    //     },
    //     ':hover': {
    //       '_indicator': {
    //         borderColor: `$primary.400`,
    //       },
    //       '_icon': { color: `$primary.400` },
    //       ':disabled': {
    //         _indicator: {
    //           borderColor: `$primary.500`,
    //         },
    //         _icon: {
    //           color: `$primary.500`,
    //         },
    //       },
    //     },
    //     ':active': {
    //       _indicator: {
    //         borderColor: `$primary.300`,
    //       },
    //       _icon: { color: `$primary.300` },
    //     },
    //   },

    //   ':hover': {
    //     '_indicator': {
    //       borderColor: '$muted.400',
    //     },
    //     ':disabled': {
    //       _indicator: {
    //         borderColor: '$muted.500',
    //       },
    //     },
    //     ':checked': {
    //       _indicator: { borderColor: `$primary.600` },
    //     },
    //   },

    //   ':active': {
    //     _indicator: {
    //       borderColor: '$muted.300',
    //     },
    //   },

    ':invalid': {
      // _indicator: {
      //   borderColor: '$error.500',
      // },
    },
    // },

    ':disabled': {
      _web: {
        cursor: 'not-allowed',
      },
      opacity: 0.6,
      _icon: {
        bg: 'transparent',
      },
    },

    '_web': {
      'cursor': 'pointer',
      ':focusVisible': {
        _indicator: {
          outlineWidth: '2px',
          outlineColor: '$error.500',
          outlineStyle: 'solid',
        },
      },
    },

    'variants': {
      colorScheme: {},
      size: {
        lg: {
          _text: {
            fontSize: '$lg',
            lineHeight: '$xl',
          },
          _indicator: {
            h: '$7',
            w: '$7',
          },
        },
        md: {
          _text: {
            fontSize: '$md',
            lineHeight: '$md',
          },
          _indicator: {
            h: '$6',
            w: '$6',
          },
        },
        sm: {
          _text: {
            fontSize: '$sm',
            lineHeight: '$sm',
          },
          _indicator: {
            h: '$5',
            w: '$5',
          },
        },
      },
    },

    'defaultProps': {
      size: 'md',
    },
  },
  {
    componentName: 'Radio',
    descendantStyle: ['_icon', '_text', '_indicator'],
    ancestorStyle: ['_radio'],
  } as const,
  {
    plugins: [new ColorSchemeResolver(colorSchemeResolveFn)],
  }
);

function colorSchemeResolveFn({ ...props }: any) {
  let value = {};
  if (props.colorScheme) {
    const color = props.colorScheme;
    value = {
      ':checked': {
        '_indicator': {
          borderColor: `$${color}.600`,
        },

        '_icon': {
          color: `$${color}.600`,
        },
        ':hover': {
          '_indicator': {
            borderColor: `$${color}.700`,
          },
          '_icon': { color: `$${color}.700` },
          ':disabled': {
            _indicator: {
              borderColor: `$${color}.600`,
            },
            _icon: {
              color: `$${color}.600`,
            },
          },
        },
        ':active': {
          _indicator: {
            borderColor: `$${color}.800`,
          },
          _icon: { color: `$${color}.800` },
        },
      },

      '_dark': {
        ':checked': {
          '_indicator': {
            borderColor: `$${color}.500`,
          },
          '_icon': {
            color: `$${color}.500`,
          },
          ':hover': {
            '_indicator': {
              borderColor: `$${color}.400`,
            },
            '_icon': { color: `$${color}.400` },
            ':disabled': {
              _indicator: {
                borderColor: `$${color}.500`,
              },
              _icon: {
                color: `$${color}.500`,
              },
            },
          },
          ':active': {
            _indicator: {
              borderColor: `$${color}.300`,
            },
            _icon: { color: `$${color}.300` },
          },
        },

        // ':active': {
        //   _indicator: {
        //     borderColor: '$muted.300',
        //   },
        // },

        // ':invalid': {
        //   _indicator: {
        //     borderColor: '$error.500',
        //   },
        // },
      },

      '_web': {
        ':focusVisible': {
          _indicator: {
            outlineColor: `$${color}.400`,
          },
        },
      },
    };
  }

  return value;
}
