import { AsForwarder, styled } from '@gluestack-style/react';

export const StyledIcon = styled(
  AsForwarder,
  {
    color: '$muted.500',
    _dark: {
      color: '$muted.400',
    },
  },
  {
    componentName: 'Icon',
    resolveProps: ['stroke', 'fill'],
    ancestorStyle: ['_icon'],
  } as const,
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
    color: '$muted.500',
    _dark: {
      color: '$muted.400',
    },
    variants: {
      size: {
        '2xs': {
          height: '$2',
          width: '$2',
          props: {
            // @ts-ignore
            size: 8,
          },
        },
        'xs': {
          height: '$3',
          width: '$3',
          props: {
            // @ts-ignore
            size: 12,
          },
        },
        'sm': {
          height: '$4',
          width: '$4',
          props: {
            // @ts-ignore
            size: 16,
          },
        },
        'md': {
          height: '$5',
          width: '$5',
          props: {
            // @ts-ignore
            size: 20,
          },
        },
        'lg': {
          height: '$6',
          width: '$6',
          props: {
            // @ts-ignore
            size: 24,
          },
        },
        'xl': {
          height: '$7',
          width: '$7',
          props: {
            // @ts-ignore
            size: 28,
          },
        },
        '2xl': {
          height: '$8',
          width: '$8',
          props: {
            // @ts-ignore
            size: 32,
          },
        },
        '3xl': {
          height: '$9',
          width: '$9',
          props: {
            // @ts-ignore
            size: 36,
          },
        },
        '4xl': {
          height: '$10',
          width: '$10',
          props: {
            // @ts-ignore
            size: 40,
          },
        },
        '5xl': {
          height: '$12',
          width: '$12',
          props: {
            // @ts-ignore
            size: 48,
          },
        },
        '6xl': {
          height: '$16',
          width: '$16',
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
    props: {
      //@ts-ignore
      fill: 'none',
    },
  },
  {
    ancestorStyle: ['_icon'],
  } as const
);
