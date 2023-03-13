import { styled, AsForwarder } from '@dank-style/react';

export default styled(
  AsForwarder,
  {
    variants: {
      sizes: {
        xs: {
          props: {
            size: 12,
          },
        },
        sm: {
          props: {
            size: 16,
          },
        },
        md: {
          props: {
            xyz: 'xs',
          },
        },
        lg: {
          props: {
            size: 20,
          },
        },
        xl: {
          props: {
            size: 24,
          },
        },
      },
    },
    defaultProps: {
      sizes: 'md',
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
