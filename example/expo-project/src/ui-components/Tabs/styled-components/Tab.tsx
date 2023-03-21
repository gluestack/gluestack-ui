import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'bg': 'transparent',
    '_web': {
      outlineWidth: 0,
    },

    'variants': {
      size: {
        md: {
          px: '$4',
          py: '$2',

          _text: {
            fontSize: '$md',
            lineHeight: '$md',
          },
        },
      },
    },

    'defaultProps': {
      size: 'md',
    },

    //@ts-ignore
    ':hover': {
      bg: '$secondary50_alpha_20',
      borderRadius: '$full',
    },
    //@ts-ignore
    ':active': {
      bg: '$secondary50_alpha_10',
      borderRadius: '$full',
    },
    //@ts-ignore
    ':focus': {
      bg: '$secondary50_alpha_20',
      borderRadius: '$full',
    },
    //@ts-ignore
    ':disabled': {
      opacity: 0.5,
    },
  },
  {}
);
