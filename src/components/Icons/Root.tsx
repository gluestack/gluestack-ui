import { AsForwarder } from '@gluestack-style/react';
import { styled } from '../styled';

export const StyledIcon: any = styled(
  AsForwarder,
  {
    'color': '$muted.500',
    ':hover': {
      color: 'red',
    },
    '_dark': {
      color: '$muted.400',
    },
    'variants': {
      size: {
        '2xs': {
          h: '$2',
          w: '$2',
        },
        'xs': {
          h: '$3',
          w: '$3',
        },
        'sm': {
          h: '$4',
          w: '$4',
        },
        'md': {
          h: '$5',
          w: '$5',
        },
        'lg': {
          h: '$6',
          w: '$6',
        },
        'xl': {
          h: '$7',
          w: '$7',
        },
        '2xl': {
          h: '$8',
          w: '$8',
        },
        '3xl': {
          h: '$9',
          w: '$9',
        },
        '4xl': {
          h: '$10',
          w: '$10',
        },
        '5xl': {
          h: '$12',
          w: '$12',
        },
        '6xl': {
          h: '$16',
          w: '$16',
        },
      },
    },
    'defaultProps': {
      size: 'md',
    },
  },
  {
    ancestorStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);
