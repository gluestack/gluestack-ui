import { View } from 'react-native';
import { styled } from '../../styled';

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
          _labelText: {
            fontSize: '$md',
          },
        },
      },
    },
  },
  { descendantStyle: ['_label', '_labelText'] }
);
