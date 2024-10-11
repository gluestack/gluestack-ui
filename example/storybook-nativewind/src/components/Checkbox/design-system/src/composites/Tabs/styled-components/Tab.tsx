import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'bg': 'transparent',
    '_web': { outlineWidth: 0 },

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
      type: {
        pill: {
          ':hover': {
            bg: '$secondary50_alpha_20',
            borderRadius: '$full',
          },
          ':active': {
            bg: '$secondary50_alpha_10',
            borderRadius: '$full',
          },
          ':focus': {
            bg: '$secondary50_alpha_20',
            borderRadius: '$full',
          },
        },
        section: {
          ':active': {
            borderBottomWidth: 2,
            borderColor: '$border900',
            _text: {
              color: '$text900',
            },
          },
          '_dark': {
            ':active': {
              borderColor: '$borderDark200',
              _text: {
                color: '$text50',
              },
            },
          },
        },
      },
    },
    'defaultProps': {
      size: 'md',
    },
    ':disabled': {
      opacity: 0.5,
    },
  },
  {
    ancestorStyle: ['_tab'],
    descendantStyle: ['_text'],
  }
);
