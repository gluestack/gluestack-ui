//@ts-nocheck
import React, { memo, useEffect, useState } from 'react';
import {
  AnimationResolver,
  createStyled,
  AddCssTokenVariables,
  styled,
} from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
import { Motion } from '@legendapp/motion';

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

export function AnimationPlugin() {
  const [hover, setHover] = useState(false);

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
  }, []);

  return (
    <Wrapper>
      <StyledMotionView
        ref={ref}
        variant="subtle"
        states={{ hover: hover }}
        sx={{
          'bg': '$red500',
          ':initial': { x: -150 },
          ':animate': {
            x: 0,
          },
          ':hover': {
            ':animate': {
              scale: 1.2,
            },
          },
        }}
      >
        <StlyedText>Hello World</StlyedText>
      </StyledMotionView>
    </Wrapper>
  );
}

export default AnimationPlugin;
