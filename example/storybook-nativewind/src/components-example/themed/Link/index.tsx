import { styled } from '@gluestack-style/react';
import { createLink } from '@gluestack-ui/link';
import { Pressable, Text } from 'react-native';

const StyledRoot = styled(
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
    },
  },
  {
    componentName: 'Link',
  } as const
);

const StyledText = styled(
  Text,
  {
    textDecorationLine: 'underline',
    color: '$info700',
  },
  {
    ancestorStyle: ['_text'],
  } as const
);

export const Link = createLink({
  Root: StyledRoot,
  Text: StyledText,
});
export const LinkText = Link.Text;
