import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'bg': '$primary500',
    'rounded': '$full',
    'zIndex': 20,
    'px': 16,
    'py': 16,
    'flexDirection': 'row',
    'alignItems': 'center',
    '_ios': {
      width: '25%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    'variants': {
      size: {
        sm: {
          px: '$2',
          py: '$2',
          _text: {
            fontSize: '$sm',
          },
        },
        md: {
          px: '$3',
          py: '$3',
          _text: {
            fontSize: '$md',
          },
        },
        lg: {
          px: '$4',
          py: '$4',
          _text: {
            fontSize: '$lg',
          },
        },
      },
      position: {
        'top-right': {
          top: 12,
          right: 4,
          position: 'absolute',
        },

        'top-left': {
          top: 12,
          left: 4,
          position: 'absolute',
        },

        'bottom-right': {
          bottom: 4,
          right: 4,
          position: 'absolute',
        },

        'bottom-left': {
          bottom: 4,
          left: 4,
          position: 'absolute',
        },
      },
    },

    'defaultProps': {
      position: 'bottom-left',
      size: 'md',
    },

    ':hover': {
      bg: '$primary600',
    },

    ':active': {
      bg: '$primary700',
    },

    '_dark': {
      'bg': '$primary400',
      ':hover': {
        bg: '$primary500',
      },
      ':active': {
        bg: '$prinary600',
      },
    },

    '_web': {
      ':focusVisible': {
        outlineWidth: '2px',
        outlineColor: '$primary700',
        outlineStyle: 'solid',
        _dark: {
          outlineColor: '$primary300',
        },
      },
    },
  },
  {}
);
