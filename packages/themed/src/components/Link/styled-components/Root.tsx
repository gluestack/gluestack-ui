import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,

  {
    _web: {
      'outlineWidth': 0,
      ':disabled': {
        cursor: 'not-allowed',
      },
      ':focusVisible': {
        outlineWidth: 2,
        outlineColor: '$primary700',
        outlineStyle: 'solid',
        _dark: {
          outlineColor: '$primary400',
        },
      },
    },
    _text: {
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
        ':hover': {
          color: '$info400',
        },
        ':active': {
          color: '$info300',
        },
      },
    },
  },
  {
    componentName: 'Link',
    descendantStyle: ['_text'],
  } as const
);
