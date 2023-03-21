import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    _text: {
      'fontWeight': '$normal',
      'color': '$info600',
      ':hover': {
        textDecoration: 'underline',
        color: '$info600',
      },
      ':active': {
        textDecoration: 'underline',
        color: '$info700',
      },
      '_dark': {
        'color': '$info300',
        ':hover': {
          textDecoration: 'underline',
          color: '$info300',
        },
        ':active': {
          textDecoration: 'underline',
          color: '$info200',
        },
      },
    },
  },
  {
    descendantStyle: ['_text'],
  }
);
