import { AnimatedView } from '@gluestack-style/animation-resolver';

import { styled } from '../../../styled';

export default styled(
  AnimatedView,
  {
    alignItems: 'center',
    rounded: 0,
    borderTopLeftRadius: '$2xl',
    borderTopRightRadius: '$2xl',
    bg: '$backgroundLight0',
    _sectionHeaderBackground: {
      bg: '$backgroundLight0',
    },
    maxHeight: '80%',
    px: '$2',
    _dark: {
      bg: '$backgroundDark900',
      _sectionHeaderBackground: {
        bg: '$backgroundDark900',
      },
    },
    _web: {
      userSelect: 'none',
    },
  },
  {
    descendantStyle: ['_sectionHeaderBackground'],
  }
);
