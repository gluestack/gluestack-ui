// @ts-nocheck
import { Motion } from '@legendapp/motion';
import { styled } from '../../styled';

export default styled(
  Motion.View,
  {
    alignItems: 'center',
    borderTopLeftRadius: '$3xl',
    borderTopRightRadius: '$3xl',
    maxHeight: '70%',
    p: '$2',
    bg: '$backgroundLight0',
    _sectionHeaderBackground: {
      bg: '$backgroundLight0',
    },
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
