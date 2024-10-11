import { styled } from '@gluestack-style/react';
import { Code } from '@expo/html-elements';

export default styled(
  Code,
  {
    color: '$primary400',
    fontSize: '$md',
    fontWeight: '$medium',
    lineHeight: '$md',
    px: 6,
    py: 2,
    bg: '$backgroundLight100',
    fontFamily: '$mono',
    borderRadius: 4,

    _dark: {
      bg: '$backgroundDark800',
    },
  },
  {}
);
