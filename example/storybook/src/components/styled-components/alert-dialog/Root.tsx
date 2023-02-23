import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',

    variants: {
      // style:{
      //   alert: {},
      //   form: {},

      // }

      size: {
        xs: {
          _content: {
            width: '60%',
            maxWidth: '360px',
          },
        },
        sm: { _content: { width: '70%', maxWidth: '420px' } },
        md: { _content: { width: '80%', maxWidth: '510px' } },
        lg: { _content: { width: '90%', maxWidth: '640px' } },
        full: {
          _content: { width: '100%' },
        },
      },
    },
    defaultProps: {},

    _web: {
      pointerEvents: 'box-none',
    },
  },
  { descendantStyle: ['_content'] }
);
