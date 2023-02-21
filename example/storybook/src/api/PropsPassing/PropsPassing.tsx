import React, { memo, useEffect, useState } from 'react';
import { AnimationResolver, createStyled, styled } from '@dank-style/react';
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
    height: 100,
    width: 100,
    bg: '$red400',
    props: {
      // bg: '$blue500',
      variant: 'solid',
    },
    variants: {
      variant: {
        solid: {
          ':hover': {
            props: {
              bg: '$purple500',
            },
          },
        },
      },
    },
    // props: {
    //   bg: '$blue500',
    // },
  },
  {}
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
      <StyledView animate="hello" variant="solid" states={{ hover: hover }} />
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
