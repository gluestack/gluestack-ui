import React from 'react';
import { styled } from '@dank-style/react';
import { createIcon } from '@universa11y/icon';
import { AsForwarder } from '@universa11y/as-forwarder';

const StyledIcon = styled(
  AsForwarder,
  {
    variants: {
      size: {
        xs: {
          props: {
            size: 14,
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

    // _dark: {
    //   // color: '$muted50',
    //   h: 16,
    //   w: 16,
    // },
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
const AccessibleIcon = createIcon({ Root: StyledIcon });

export function Icon({ ...props }: any) {
  return <AccessibleIcon {...props} />;
}
