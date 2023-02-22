import { styled } from '@dank-style/react';
import { Svg } from 'react-native-svg';

export default styled(
  Svg,
  {
    w: 20,
    h: 20,
    color: 'transparent',
    // props: {
    //   stroke: '$gray500',
    //   viewBox: '0 0 16 16',
    //   fill: 'none',
    //   strokeWidth: 2,
    //   strokeLinecap: 'round',
    //   strokeLinejoin: 'round',
    // },
    // variants: {
    //   variant: {
    //     modalHeader: {
    //       color: '$muted500',
    //       h: 16,
    //       w: 16,
    //     },
    //   },
    //   size: {
    //     xs: {
    //       h: 12,
    //       w: 12,
    //     },
    //     sm: {
    //       h: 16,
    //       w: 16,
    //     },
    //     md: {
    //       h: 18,
    //       w: 18,
    //     },
    //     lg: {
    //       h: 20,
    //       w: 20,
    //     },
    //     xl: {
    //       h: 24,
    //       w: 24,
    //     },
    //   },
    // },

    // _dark: {
    //   props: {
    //     stroke: '$muted50',
    //     viewBox: '0 0 16 16',
    //     fill: 'none',
    //     strokeWidth: 2,
    //     strokeLinecap: 'round',
    //     strokeLinejoin: 'round',
    //   },
    // },
    defaultProps: {
      // stroke: 'red',
      viewBox: '0 0 24 24',
      fill: 'none',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
  },
  {
    ancestorStyle: ['_icon'],
    DEBUG: 'STYLED_ICON',
    resolveProps: ['stroke'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);
