import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',

    variants: {
      size: {
        xs: {
          _content: {
            width: '60%',
            maxWidth: 280,
          },
        },
        sm: {
          _content: {
            width: '65%',
            maxWidth: 320,
          },
        },
        md: {
          _content: {
            width: '75%',
            maxWidth: 380,
          },
        },
        lg: {
          _content: {
            width: '80%',
            maxWidth: 520,
          },
        },
        xl: {
          _content: {
            width: '90%',
            maxWidth: 580,
          },
        },
        full: {
          _content: {
            width: '100%',
          },
        },
      },
    },
    defaultProps: { size: 'md' },

    _web: {
      pointerEvents: 'box-none',
    },
  },
  {
    componentName: 'AlertDialog',
    descendantStyle: ['_content'],
  } as const
);
