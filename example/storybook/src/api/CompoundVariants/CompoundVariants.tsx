import React, { memo, useEffect, useState } from 'react';

import { createStyled, styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
import { Motion } from '@legendapp/motion';
import { View } from 'react-native';
import { Text } from 'react-native';

const StyledView = styled(
  View,
  {
    h: 20,
    w: 20,
    bg: '$red800',

    props: {
      variant: 'solid',
      size: 'md',
      // bg: '$red500',
    },

    // props: {
    //   variant: 'sm',
    //   // bg: '$blue400',
    // },

    // ':hover': {
    //   props: {
    //     variant: 'sm',
    //     // bg: '$blue400',
    //   },
    // },
    // size: 20,
    // color: '$red300',
    variants: {
      variant: {
        solid: {
          bg: '$amber200',
          _dark: {
            bg: '$pink400',
          },
        },
      },
      size: {
        md: {
          padding: '$10',
        },
      },
    },

    compoundVariants: [
      {
        variant: 'solid',
        size: 'md',
        value: {
          bg: '$red400',
          _dark: {
            bg: '$blue600',
          },
        },
      },
    ],

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
export function CompoundVariants() {
  const [hover, setHover] = useState(false);

  // console.log(
  //   animatedPlugin.inputMiddleWare({
  //     ':animate': {
  //       opacity: 0.5,
  //       y: 0,
  //     },
  //     ':initial': {
  //       y: -50,
  //     },
  //     ':hover': {
  //       ':animate': {
  //         opacity: 1,
  //       },
  //     },
  //   }),
  //   '%%%%%%%%%%%'
  // );

  const ref = React.useRef(null);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.addEventListener('mouseover', () => {
        setHover(true);
      });
      ref.current.addEventListener('mouseout', () => {
        setHover(false);
      });
    }
    setTimeout(() => {
      setHover(true);
    }, 5000);
  }, []);

  return (
    <Wrapper>
      <StyledView
      // sx={{
      //   ':hover': {
      //     props: {
      //       variant: 'sm',
      //       // bg: '$blue400',
      //     },
      //   },
      // }}
      // variant="sm"
      // bg="$blue400"
      // variant="sm"
      // animate="hello"
      // states={{ hover: true }}
      // sx={{
      //   props: {
      //     variant: 'sm',
      //     bg: '$red400',
      //   },
      // }}
      >
        <Text>Hello</Text>
      </StyledView>
      {/* <StyledMotionView
        ref={ref}
        variant="subtle"
              animate={{
          x: value * 100,
          opacity: value ? 1 : 0.2,
          scale: value ? 1 : 0.5,
        }}
        states={{ hover: hover }}
      >
        <StlyedText>Hello World</StlyedText>
      </StyledMotionView> */}
    </Wrapper>
  );
}

export default CompoundVariants;
