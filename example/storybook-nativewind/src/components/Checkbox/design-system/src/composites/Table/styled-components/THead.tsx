import { styled } from '@gluestack-style/react';
import { THead } from '@expo/html-elements';

export default styled(
  THead,
  {
    bg: '$backgroundLight100',
    _dark: {
      bg: '$backgroundDark900',
    },
  },
  {}
);
