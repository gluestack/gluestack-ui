import { AsForwarder } from '@gluestack-style/react';
import { styled } from '../../styled';

export default styled(
  AsForwarder,
  {
    props: {
      fill: 'none',
    },
    color: '$backgroundLight800',
    _dark: {
      color: '$backgroundDark400',
    },
    variants: {
      size: {
        '2xs': {
          h: '$3',
          w: '$3',
        },
        'xs': {
          h: '$3.5',
          w: '$3.5',
        },
        'sm': {
          h: '$4',
          w: '$4',
        },
        'md': {
          h: '$4.5',
          w: '$4.5',
        },
        'lg': {
          h: '$5',
          w: '$5',
        },
        'xl': {
          h: '$6',
          w: '$6',
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
    },
  }
);
