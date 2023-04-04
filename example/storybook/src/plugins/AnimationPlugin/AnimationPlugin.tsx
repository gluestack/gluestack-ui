import React from 'react';
import { Wrapper } from '../../components/Wrapper';
import { AnimatePresence, Motion } from '@legendapp/motion';
import { Pressable, Text, View } from 'react-native';
import { createStyled } from '@dank-style/react';
import { AnimationResolver } from '@dank-style/animation-plugin';
// import { styled } from '@dank-style/react';

const styled = createStyled([new AnimationResolver()]) as any;

export const images = [
  'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://plus.unsplash.com/premium_photo-1675805015392-28fd80c551ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
];

const Box = styled(View, {});

const StyledMotionImage = styled(Motion.Image, {
  ':animate': {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
});

export function AnimationPlugin() {
  const [imageIndex, setImageIndex] = React.useState(0);
  const [xPosition, setXPosition] = React.useState(0);

  return (
    <Wrapper>
      <Box
        sx={{
          'position': 'relative',
          'justifyContent': 'center',
          'width': '100%',
          'height': 200,
          '@sm': {
            height: 300,
          },
          'aspectRatio': 1 * 1.4,
        }}
      >
        <styled.Component>
          <StyledMotionImage
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              resizeMode: 'cover',
            }}
            source={{ uri: images[imageIndex] }}
            key={`image-${imageIndex}-${Math.random()}`}
            sx={{
              ':initial': {
                x: xPosition,
                opacity: 0,
              },
              ':exit': {
                zIndex: 0,
                x: -xPosition,
                opacity: 0,
              },
              ':transition': {
                x: { type: 'spring', stiffness: 200, damping: 23 },
              },
            }}
          />
        </styled.Component>
      </Box>
      <Pressable
        accessibilityRole="button"
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          borderRadius: 30,
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
          right: 10,
        }}
        onPress={() => {
          setXPosition(1000);
          setImageIndex((prev) => (prev + 1) % images.length);
        }}
      >
        {'‣'}
      </Pressable>
      <Pressable
        accessibilityRole="button"
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          borderRadius: 30,
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
          left: 10,
          transform: [{ scale: -1 }],
        }}
        onPress={() => {
          setXPosition(-1000);
          setImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }}
      >
        {'‣'}
      </Pressable>
    </Wrapper>
  );
}

export default AnimationPlugin;
