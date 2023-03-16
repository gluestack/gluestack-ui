import { styled, AsForwarder } from '@dank-style/react';

const Comp: any = styled(
  AsForwarder,
  {
    color: '$backgroundLight500',

    variants: {
      size: {
        xs: {
          h: 12,
          w: 12,
        },
        sm: {
          h: 16,
          w: 16,
        },
        md: {
          h: 18,
          w: 18,
        },
        lg: {
          h: 20,
          w: 20,
        },
        xl: {
          h: 24,
          w: 24,
        },
      },
    },
    defaultProps: {
      size: 'md',
    },
  },
  {
    ancestorStyle: ['_icon'],
    DEBUG: 'STYLED_ICON',
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

export default Comp;
