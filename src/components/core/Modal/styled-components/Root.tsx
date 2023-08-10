//@ts-nocheck
import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    variants: {
      size: {
        xs: { _content: { width: '60%', maxWidth: 360 } },
        sm: { _content: { width: '70%', maxWidth: 420 } },
        md: { _content: { width: '80%', maxWidth: 510 } },
        lg: { _content: { width: '90%', maxWidth: 640 } },
        full: { _content: { width: '100%' } },
      },
    },

    defaultProps: { size: 'md' },

    _web: {
      pointerEvents: 'box-none',
    },
  },
  { descendantStyle: ['_content'] }
);
