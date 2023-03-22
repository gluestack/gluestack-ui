import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    'bg': '$primary600',
    'shadow': '$4',
    'position': 'absolute',
    'borderRadius': '$full',
    // top: -6,
    'marginLeft': '-1%',

    '_dark': {
      bg: '$primary500',
    },

    'variants': {
      size: {
        sm: {
          h: '$4',
          w: '$4',
        },
        md: {
          h: '$5',
          w: '$5',
        },
        lg: {
          h: '$6',
          w: '$6',
        },
      },
    },
    'defaultProps': {
      size: 'sm',
    },

    // ':hover': {
    //   _thumbInteraction: {
    //     width: 4,
    //     bg: '$primary300',
    //     _dark: {
    //       bg: '$primary800',
    //     },
    //   },
    // },

    // ':active': {
    //   bg: 'yellow',
    //   _thumbInteraction: {
    //     width: '$7',
    //     height: '$7',

    //     bg: '$primary300',
    //     _dark: {
    //       bg: '$primary800',
    //     },
    //   },
    // },

    // ':focus': {
    //   bg: 'red',
    //   _thumbInteraction: {
    //     width: 6,
    //     bg: '$primary700',
    //     _dark: {
    //       bg: '$primary300',
    //     },
    //   },
    // },

    ':disabled': {
      opacity: 0.4,
    },

    '_web': {
      'cursor': 'pointer',

      ':hover': {
        outlineWidth: 4,
        outlineColor: '$primary300',
        outlineStyle: 'solid',

        _dark: {
          outlineColor: '$primary800',
        },
      },

      ':active': {
        outlineWidth: 8,
        outlineColor: '$primary300',
        outlineStyle: 'solid',

        _dark: {
          outlineColor: '$primary800',
        },
      },

      ':focus': {
        outlineWidth: 6,
        outlineColor: '$primary700',
        outlineStyle: 'solid',

        _dark: {
          outlineColor: '$primary300',
        },
      },

      ':disabled': {
        opacity: 0.4,
      },
    },
  },
  { ancestorStyle: ['_thumb'], descendantStyle: ['_thumbInteraction'] }
);
