import { Motion } from '@legendapp/motion';
import { styled } from '@gluestack-style/react';
import { AnimationResolver } from '@gluestack-style/animation-plugin';

export default styled(
  Motion.View,
  {
    alignItems: 'center',
    // @ts-ignore
    borderTopLeftRadius: '$3xl',
    // @ts-ignore
    borderTopRightRadius: '$3xl',
    maxHeight: '70%',
    padding: '$2',
    backgroundColor: '$backgroundLight0',
    _sectionHeaderBackground: {
      backgroundColor: '$backgroundLight0',
    },
    _dark: {
      backgroundColor: '$backgroundDark900',
      _sectionHeaderBackground: {
        backgroundColor: '$backgroundDark900',
      },
    },
    _web: {
      userSelect: 'none',
    },
    defaultProps: {
      hardShadow: '5',
    },
  },
  {
    componentName: 'SelectActionsheetContent',
    descendantStyle: ['_sectionHeaderBackground'],
  } as const,
  {
    plugins: [new AnimationResolver({})],
  }
);
