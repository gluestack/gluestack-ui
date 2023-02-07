import React, { memo, useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
import { get, set } from '@dank-style/color-mode';
import { Motion } from '@legendapp/motion';

const StyledMotionView = memo(
  styled(
    Motion.Pressable,
    {
      'w': 200,
      'h': 200,
      'bg': '$blue800',
      'props': {
        style: {
          backgroundColor: 'red',
        },
        animate: {
          opacity: 0.5,
        },
      },
      ':hover': {
        w: 400,
        //@ts-ignore
        props: {
          animate: {
            opacity: 1,
          },
        },
      },
    },
    {}
  )
);

export function PropsPassing() {
  const [hover, setHover] = useState(false);

  return (
    <Wrapper>
      <StyledMotionView
        onHoverIn={() => {
          setHover(true);
        }}
        onHoverOut={() => {
          setHover(false);
        }}
        /*        animate={{
          x: value * 100,
          opacity: value ? 1 : 0.2,
          scale: value ? 1 : 0.5,
        }}*/
        states={{ hover: hover }}
      />
    </Wrapper>
  );
}

export default PropsPassing;
