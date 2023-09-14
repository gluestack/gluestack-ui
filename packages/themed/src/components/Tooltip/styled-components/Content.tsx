import { AnimationResolver } from '@gluestack-style/animation-plugin';
import { styled } from '@gluestack-style/react';
import { Motion } from '@legendapp/motion';

export default styled(
  Motion.View,
  {
    ':initial': {
      opacity: 0,
      scale: 0.5,
    },
    ':animate': {
      opacity: 1,
      scale: 1,
    },
    ':exit': {
      opacity: 0,
      scale: 0.5,
    },
    ':transition': {
      type: 'spring',
      damping: 18,
      stiffness: 250,
      opacity: {
        type: 'timing',
        duration: 250,
      },
    },

    'py': '$1',
    'px': '$3',
    'borderRadius': '$sm',
    'bg': '$backgroundLight900',

    '_text': {
      fontSize: '$xs',
      color: '$textLight50',
    },

    // @ts-ignore
    '_dark': {
      bg: '$backgroundDark800',
      _text: {
        color: '$textDark50',
      },
    },
    'defaultProps': {
      hardShadow: '2',
    },
  },
  {
    componentName: 'TooltipContent',
    descendantStyle: ['_text'],
  } as const,
  {
    plugins: [new AnimationResolver({})],
  }
);
