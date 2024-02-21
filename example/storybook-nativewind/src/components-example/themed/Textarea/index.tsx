import { createTextarea } from '@gluestack-ui/textarea';

import { View, TextInput } from 'react-native';
import { styled } from '@gluestack-style/react';
const StyledRoot = styled(
  View,
  {
    'w': '100%',
    'borderWidth': 1,
    'borderColor': '$background300',
    'borderRadius': '$sm',
    'h': 100,

    '_input': {
      p: '$3',
      _web: {
        outlineWidth: 0,
        outline: 'none',
      },
    },

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

    'variants': {
      size: {
        xl: {
          _input: {
            fontSize: '$xl',
          },
        },

        lg: {
          _input: {
            fontSize: '$lg',
          },
        },
        md: {
          _input: {
            fontSize: '$md',
          },
        },
        sm: {
          _input: {
            fontSize: '$sm',
          },
        },
      },
      variant: {
        default: {
          '_input': {
            _web: {
              outlineWidth: '0',
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
              ':hover': {
                borderColor: '$primary700',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $primary700',
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
      variant: 'default',
      size: 'md',
    },
  },
  {
    descendantStyle: ['_input'],
  },
  {}
);
const StyledInput = styled(
  TextInput,
  {
    p: '$2',
    color: '$text900',
    textAlignVertical: 'top',
    flex: 1,

    props: {
      // @ts-ignore
      multiline: true,
      placeholderTextColor: '$text500',
    },

    _web: {
      'cursor': 'text',
      ':disabled': {
        cursor: 'not-allowed',
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
const AccessibleTextarea = createTextarea({
  Root: StyledRoot,
  Input: StyledInput,
});

export const Textarea = AccessibleTextarea;
export const TextareaInput = AccessibleTextarea.Input;
