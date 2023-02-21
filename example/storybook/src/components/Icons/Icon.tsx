import React from 'react';
import { styled } from '@dank-style/react';
// import { createIcon } from '@universa11y/icon';
import { View } from 'react-native';
// import { AsForwarder } from '@universa11y/as-forwarder';

// const AsForwarderIcon = ({ as, children, ...props }: any) => {
//   return <AsForwarder as={as} children={children} {...props} />;
// };

const StyledIcon = styled(
  View,
  {
    h: 20,
    w: 20,
    // backgroundColor: '$red200',
    props: {
      // size: 24,
      bg: '$blue300',
    },
    // size: 20,
    // color: '$red300',
    variants: {
      size1: {
        // xs: {
        //   size: 14,
        // },
        sm: {
          props: {
            // size: 24,
            bg: '$blue900',
          },
        },
        // md: {
        //   h: 18,
        //   w: 18,
        // },
        // lg: {
        //   h: 20,
        //   w: 20,
        // },
        // xl: {
        //   h: 24,
        //   w: 24,
        // },
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
    // resolveProps: ['size'],
    DEBUG: 'STYLED_ICON',
  },
  {
    // alias: {
    //   size: 'space',
    // },
    // propertyTokenMap: {
    //   size: 'space',
    // },
    // propertyResolver: {
    //   size: (rawValue: any, resolver: any) => {
    //     console.log('hello size', rawValue);
    //     return resolver(rawValue);
    //   },
    // },
  }
);
// const AccessibleIcon = createIcon({ Root: StyledIcon });

export function Icon({ ...props }: any) {
  //universa11y/icon
  return <StyledIcon {...props} />;
  // return <AccessibleIcon {...props} />;
}
