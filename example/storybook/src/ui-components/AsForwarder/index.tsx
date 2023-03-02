import { styled, AsForwarder } from '@dank-style/react';

export const StyledHeading = styled(
  AsForwarder,
  {
    variants: {
      size: {
        xs: {
          color: '$amber600',
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
    resolveProps: ['size'],
    DEBUG: 'STYLED_ICON',
  },
  {
    propertyTokenMap: {
      size: 'space',
    },
  }
);
