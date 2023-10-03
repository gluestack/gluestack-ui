import { Motion } from '@legendapp/motion';
import { styled } from '@gluestack-style/react';
import { AnimationResolver } from '@gluestack-style/animation-plugin';

export default styled(
  Motion.View,
  {
    alignItems: 'center',
    borderTopLeftRadius: '$3xl',
    borderTopRightRadius: '$3xl',
    p: '$2',
    bg: '$backgroundLight0',
    _sectionHeaderText: {
      bg: '$backgroundLight0',
    },
    // @ts-ignore
    _dark: {
      bg: '$backgroundDark900',
      _sectionHeaderText: {
        bg: '$backgroundDark900',
      },
    },
    // @ts-ignore
    _web: {
      userSelect: 'none',
    },
    defaultProps: {
      hardShadow: '5',
    },
  },
  {
    componentName: 'SelectContent',
    descendantStyle: ['_sectionHeaderText'],
  } as const,
  {
    plugins: [new AnimationResolver({})],
  }
);
