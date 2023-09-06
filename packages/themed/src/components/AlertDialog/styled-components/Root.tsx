import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    w: '$full',
    h: '$full',
    justifyContent: 'center',
    alignItems: 'center',

    variants: {
      size: {
        xs: { _content: { w: '60%', maxWidth: 360 } },
        sm: { _content: { w: '70%', maxWidth: 420 } },
        md: { _content: { w: '80%', maxWidth: 510 } },
        lg: { _content: { w: '90%', maxWidth: 640 } },
        full: { _content: { w: '$full' } },
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
