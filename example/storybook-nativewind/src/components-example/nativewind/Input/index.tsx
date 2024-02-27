import { createInput } from '@gluestack-ui/input';
import { styled, AsForwarder } from '@gluestack-style/react';
import { View, Pressable, TextInput } from 'react-native';

const StyledRoot = styled(
  View,
  {
    'borderWidth': 1,
    'borderColor': '$background300',
    'borderRadius': '$sm',
    'flexDirection': 'row',
    'overflow': 'hidden',
    'alignContent': 'center',

    ':hover': {
      borderColor: '$border400',
    },

    ':focus': {
      'borderColor': '$primary700',
      ':hover': {
        borderColor: '$primary700',
      },
    },

    ':disabled': {
      'opacity': 0.4,
      ':hover': {
        borderColor: '$background300',
      },
    },

    '_input': {
      py: 'auto',
      px: '$3',
    },

    '_icon': {
      color: '$text400',
    },

    'variants': {
      size: {
        xl: {
          h: '$12',
          _input: {
            props: {
              size: 'xl',
            },
          },
          _icon: {
            props: {
              size: 'xl',
            },
          },
        },
        lg: {
          h: '$11',
          _input: {
            props: {
              size: 'lg',
            },
          },
          _icon: {
            props: {
              size: 'lg',
            },
          },
        },
        md: {
          h: '$10',
          _input: {
            props: {
              size: 'md',
            },
          },
          _icon: {
            props: {
              size: 'sm',
            },
          },
        },
        sm: {
          h: '$9',
          _input: {
            props: {
              size: 'sm',
            },
          },
          _icon: {
            props: {
              size: 'xs',
            },
          },
        },
      },
      variant: {
        underlined: {
          '_input': {
            _web: {
              outlineWidth: 0,
              outline: 'none',
            },
            px: '$0',
          },

          'borderWidth': 0,
          'borderRadius': 0,
          'borderBottomWidth': '$1',

          ':focus': {
            borderColor: '$primary700',
            _web: {
              boxShadow: 'inset 0 -1px 0 0 $primary700',
            },
          },

          ':invalid': {
            'borderBottomWidth': 2,
            'borderBottomColor': '$error700',
            '_web': {
              boxShadow: 'inset 0 -1px 0 0 $error700',
            },
            ':hover': {
              borderBottomColor: '$error700',
            },
            ':focus': {
              'borderBottomColor': '$error700',
              ':hover': {
                borderBottomColor: '$error700',
                _web: {
                  boxShadow: 'inset 0 -1px 0 0 $error700',
                },
              },
            },
            ':disabled': {
              ':hover': {
                borderBottomColor: '$error700',
                _web: {
                  boxShadow: 'inset 0 -1px 0 0 $error700',
                },
              },
            },
          },
        },

        outline: {
          '_input': {
            _web: {
              outlineWidth: 0,
              outline: 'none',
            },
          },

          ':focus': {
            borderColor: '$primary700',
            _web: {
              boxShadow: 'inset 0 0 0 1px $primary700',
            },
          },

          ':invalid': {
            'borderColor': '$error700',
            '_web': {
              boxShadow: 'inset 0 0 0 1px $error700',
            },
            ':hover': {
              borderColor: '$error700',
            },
            ':focus': {
              'borderColor': '$error700',
              ':hover': {
                borderColor: '$error700',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error700',
                },
              },
            },
            ':disabled': {
              ':hover': {
                borderColor: '$error700',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error700',
                },
              },
            },
          },
        },

        rounded: {
          'borderRadius': 999,

          '_input': {
            px: '$4',
            _web: {
              outlineWidth: 0,
              outline: 'none',
            },
          },

          ':focus': {
            borderColor: '$primary700',
            _web: {
              boxShadow: 'inset 0 0 0 1px $primary700',
            },
          },

          ':invalid': {
            'borderColor': '$error700',
            '_web': {
              boxShadow: 'inset 0 0 0 1px $error700',
            },
            ':hover': {
              borderColor: '$error700',
            },
            ':focus': {
              'borderColor': '$error700',
              ':hover': {
                borderColor: '$error700',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error700',
                },
              },
            },
            ':disabled': {
              ':hover': {
                borderColor: '$error700',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error700',
                },
              },
            },
          },
        },
      },
    },

    'defaultProps': {
      size: 'md',
      variant: 'outline',
    },
  },
  {
    descendantStyle: ['_input', '_icon'],
  }
);

const StyledIcon = styled(
  AsForwarder,
  {
    color: '$background800',
    variants: {
      size: {
        '2xs': {
          h: '$3',
          w: '$3',
          props: {
            // @ts-ignore
            size: 12,
          },
        },
        'xs': {
          h: '$3.5',
          w: '$3.5',
          props: {
            //@ts-ignore
            size: 14,
          },
        },
        'sm': {
          h: '$4',
          w: '$4',
          props: {
            //@ts-ignore
            size: 16,
          },
        },
        'md': {
          h: '$4.5',
          w: '$4.5',
          props: {
            //@ts-ignore
            size: 18,
          },
        },
        'lg': {
          h: '$5',
          w: '$5',
          props: {
            //@ts-ignore
            size: 20,
          },
        },
        'xl': {
          h: '$6',
          w: '$6',
          props: {
            //@ts-ignore
            size: 24,
          },
        },
      },
    },
    props: {
      size: 'md',
      fill: 'none',
    },
  },
  {
    resolveProps: ['stroke', 'fill'],
    ancestorStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
      fill: 'colors',
    },
  }
);

const StyledSlot = styled(
  Pressable,
  {
    justifyContent: 'center',
    alignItems: 'center',
    _web: {
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
  },
  {
    descendantStyle: ['_icon'],
  }
);

const StyledInputField = styled(
  TextInput,
  {
    flex: 1,
    color: '$text900',

    props: {
      placeholderTextColor: '$text500',
    },

    _web: {
      'cursor': 'text',
      ':disabled': {
        cursor: 'not-allowed',
      },
    },

    variants: {
      size: {
        '2xs': {
          fontSize: '$2xs',
        },
        'xs': {
          fontSize: '$xs',
        },

        'sm': {
          fontSize: '$sm',
        },

        'md': {
          fontSize: '$md',
        },

        'lg': {
          fontSize: '$lg',
        },

        'xl': {
          fontSize: '$xl',
        },

        '2xl': {
          fontSize: '$2xl',
        },

        '3xl': {
          fontSize: '$3xl',
        },

        '4xl': {
          fontSize: '$4xl',
        },

        '5xl': {
          fontSize: '$5xl',
        },

        '6xl': {
          fontSize: '$6xl',
        },
      },
    },
  },
  {
    ancestorStyle: ['_input'],
    resolveProps: ['placeholderTextColor'],
  },
  {
    propertyTokenMap: {
      placeholderTextColor: 'colors',
    },
  }
);
const UIInput = createInput({
  Root: StyledRoot,
  Icon: StyledIcon,
  Slot: StyledSlot,
  Input: StyledInputField,
});

export const Input = UIInput;
export const InputIcon = UIInput.Icon;
export const InputSlot = UIInput.Slot;
export const InputField = UIInput.Input;

/**
 * @deprecated Use InputField instead.
 */
export const InputInput = UIInput.Input;
