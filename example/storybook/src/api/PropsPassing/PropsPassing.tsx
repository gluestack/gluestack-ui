import React, { memo, useEffect, useState } from 'react';
import { AnimationResolver } from '@gluestack-style/animation-plugin';

import { createStyled, styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
import { Motion } from '@legendapp/motion';
import { View } from 'react-native';

const styledAnimated = createStyled([new AnimationResolver()]);

const StyledMotionView = styledAnimated(
  Motion.View,
  {
    'w': 100,
    'h': 200,
    'bg': '$blue500',
    ':initial': { y: -150 },
    ':animate': {
      opacity: 0.5,
      y: 50,
      scale: 1,
    },
    ':hover': {
      ':animate': {
        opacity: 1,
      },
    },
    '_text': {
      ':animate': {
        scale: 1,
      },
      ':hover': {
        ':animate': {
          scale: 1.01,
        },
      },
    },
    'variants': {
      variant: {
        solid: {
          bg: '$green500',
        },
        subtle: {
          bg: '$green200',
        },
      },
    },
    'defaultProps': {
      variant: 'solid',
    },
  },
  {
    descendantStyle: ['_text'],
  }
);

const StlyedText = styledAnimated(
  Motion.View,
  {},
  {
    ancestorStyle: ['_text'],
  }
);

const StyledView = styled(
  View,
  {
    h: 20,
    w: 20,
    bg: '$red800',

    // 'props': {
    //   // size: 24,
    //   // bg: '$red500',
    // },

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
        // xs: {
        //   size: 14,
        // },
        sm: {
          bg: '$amber200',
          // props: {
          //   bg: '$blue900',
          //   // size: 24,
          // },
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
export function PropsPassing() {
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
        sx={{
          ':hover': {
            props: {
              variant: 'sm',
              // bg: '$blue400',
            },
          },
        }}
        // variant="sm"
        // bg="$blue400"
        // variant="sm"
        // animate="hello"
        states={{ hover: true }}
        // sx={{
        //   props: {
        //     variant: 'sm',
        //     bg: '$red400',
        //   },
        // }}
      />
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

export default PropsPassing;
