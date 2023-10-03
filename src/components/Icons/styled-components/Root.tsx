import { AsForwarder, styled } from '@gluestack-style/react';

export const StyledIcon = styled(
  AsForwarder,
  {
    color: '$muted.500',
    _dark: {
      color: '$muted.400',
    },
    variants: {
      size: {
        '2xs': {
          h: '$2',
          w: '$2',
          props: {
            // @ts-ignore
            size: 8,
          },
        },
        'xs': {
          h: '$3',
          w: '$3',
          props: {
            // @ts-ignore
            size: 12,
          },
        },
        'sm': {
          h: '$4',
          w: '$4',
          props: {
            // @ts-ignore
            size: 16,
          },
        },
        'md': {
          h: '$5',
          w: '$5',
          props: {
            // @ts-ignore
            size: 20,
          },
        },
        'lg': {
          h: '$6',
          w: '$6',
          props: {
            // @ts-ignore
            size: 24,
          },
        },
        'xl': {
          h: '$7',
          w: '$7',
          props: {
            // @ts-ignore
            size: 28,
          },
        },
        '2xl': {
          h: '$8',
          w: '$8',
          props: {
            // @ts-ignore
            size: 32,
          },
        },
        '3xl': {
          h: '$9',
          w: '$9',
          props: {
            // @ts-ignore
            size: 36,
          },
        },
        '4xl': {
          h: '$10',
          w: '$10',
          props: {
            // @ts-ignore
            size: 40,
          },
        },
        '5xl': {
          h: '$12',
          w: '$12',
          props: {
            // @ts-ignore
            size: 48,
          },
        },
        '6xl': {
          h: '$16',
          w: '$16',
          props: {
            // @ts-ignore
            size: 64,
          },
        },
      },
    },
    defaultProps: {
      size: 'md',
    },
  },
  {},
  {
    propertyTokenMap: {
      stroke: 'colors',
      fill: 'colors',
    },
  }
);

export default styled(
  StyledIcon,
  {
    props: {
      size: 'md',
      //@ts-ignore
      fill: 'none',
    },
    color: '$muted.500',
    _dark: {
      color: '$muted.400',
    },
  },
  {}
);
