// import { View } from 'react-native';
import { CircleIcon } from '../../Icons/Icons';
import { styled } from '../../styled';

export default styled(
  CircleIcon,
  {
    'w': '100%',
    'h': '100%',
    'p': 2,
    'justifyContent': 'center',
    'alignItems': 'center',
    'props': {
      color: '$primary300',
    },
    'color': '$primary600',

    ':checked': {
      ':hover': {
        color: '$primary700',
      },
    },

    '_dark': {
      'color': '$primary500',
      ':checked': {
        ':hover': {
          color: '$primary400',
        },
      },
    },

    ':disabled': {
      opacity: 0.4,
    },
  },
  {
    ancestorStyle: ['_icon'],
    resolveProps: ['color'],
  }
);
