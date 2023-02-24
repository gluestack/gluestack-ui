import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    flexDirection: 'column',
    width: '100%',
    variants: {
      size: {
        sm: {
          _label: {
            fontSize: '$xs',
          },
        },
        md: {
          _label: {
            fontSize: '$xs',
          },
        },
        lg: {
          _label: {
            fontSize: '$sm',
          },
        },
        xl: {
          _label: {
            fontSize: '$md',
          },
        },
      },
    },
  },
  { descendantStyle: ['_label'] }
);
