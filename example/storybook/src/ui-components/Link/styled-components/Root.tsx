import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    _text: {
      'fontWeight': '$normal',
      'textDecorationLine': 'underline',
      'color': '$info600',
      ':hover': {
        color: '$info600',
        textDecorationLine: 'none',
      },
      ':active': {
        color: '$info700',
      },
      ':disabled': {
        opacity: 0.4,
      },
      '_dark': {
        'color': '$info300',
        ':hover': {
          color: '$info300',
          textDecorationLine: 'none',
        },
        ':active': {
          color: '$info200',
        },
      },
      'cursor': 'pointer',
    },
  },
  {
    descendantStyle: ['_text'],
  }
);
