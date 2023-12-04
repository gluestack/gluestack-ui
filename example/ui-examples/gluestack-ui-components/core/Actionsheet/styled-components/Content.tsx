// @ts-nocheck
import { Motion } from '@legendapp/motion';
import { styled } from '../../styled';

export default styled(
  Motion.View,
  {
    alignItems: 'center',
    borderTopLeftRadius: '$2xl',
    borderTopRightRadius: '$2xl',
    maxHeight: '80%',
    px: '$2',
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
