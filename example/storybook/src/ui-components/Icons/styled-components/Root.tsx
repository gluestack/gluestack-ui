import { styled, AsForwarder } from '@dank-style/react';

export default styled(
  AsForwarder,
  {
    props: {
      size: 8,
      // color: '$red300',
    },
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
            size: 18,
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
