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
    maxHeight: '80%',
    _dark: {
      bg: '$backgroundDark900',
    },
    _web: {
      userSelect: 'none',
    },
  },
  {}
);
