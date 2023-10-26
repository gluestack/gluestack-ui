import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    flexDirection: 'column',
    variants: {
      size: {
        sm: {
          _labelText: {
            // @ts-ignore
            fontSize: '$sm',
          },
          _labelAstrick: {
            // @ts-ignore
            fontSize: '$sm',
          },
          _helperText: {
            // @ts-ignore
            fontSize: '$xs',
          },
          _errorText: {
            // @ts-ignore
            fontSize: '$xs',
          },
        },
        md: {
          _labelText: {
            // @ts-ignore
            fontSize: '$md',
          },
          _labelAstrick: {
            // @ts-ignore
            fontSize: '$md',
          },
          _helperText: {
            // @ts-ignore
            fontSize: '$sm',
          },
          _errorText: {
            // @ts-ignore
            fontSize: '$sm',
          },
        },
        lg: {
          _labelText: {
            // @ts-ignore
            fontSize: '$lg',
          },
          _labelAstrick: {
            // @ts-ignore
            fontSize: '$lg',
          },
          _helperText: {
            // @ts-ignore
            fontSize: '$md',
          },
          _errorText: {
            // @ts-ignore
            fontSize: '$md',
          },
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
  },
  {
    componentName: 'FormControl',
    descendantStyle: [
      '_labelText',
      '_helperText',
      '_errorText',
      '_labelAstrick',
    ],
  } as const
);
