// @ts-nocheck
import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    flexDirection: 'column',
    variants: {
      size: {
        sm: {
          _labelText: {
            fontSize: '$sm',
          },
          _labelAstrick: {
            fontSize: '$sm',
          },
          _helperText: {
            fontSize: '$xs',
          },
          _errorText: {
            fontSize: '$xs',
          },
        },
        md: {
          _labelText: {
            fontSize: '$md',
          },
          _labelAstrick: {
            fontSize: '$md',
          },
          _helperText: {
            fontSize: '$sm',
          },
          _errorText: {
            fontSize: '$sm',
          },
        },
        lg: {
          _labelText: {
            fontSize: '$lg',
          },
          _labelAstrick: {
            fontSize: '$lg',
          },
          _helperText: {
            fontSize: '$md',
          },
          _errorText: {
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
    descendantStyle: [
      '_labelText',
      '_helperText',
      '_errorText',
      '_labelAstrick',
    ],
  }
);
