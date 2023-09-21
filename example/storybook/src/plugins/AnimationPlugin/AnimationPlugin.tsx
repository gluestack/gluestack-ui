import React from 'react';
import { Wrapper } from '../../components/Wrapper';
import { Pressable, View, Text } from 'react-native';
import {
  styled,
  AnimatedImage,
  AnimatedAnimatePresence,
} from '@gluestack-style/react';

const images = [require('./1.png'), require('./2.png'), require('./3.png')];
const Box = styled(View, {});
const StyledMotionImage = styled(
  AnimatedImage,
  {
    ':animate': {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
  },
  {},
  {}
);

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
            height: 400,
          },
          'aspectRatio': 1 * 1.4,
        }}
      >
        <AnimatedAnimatePresence>
          <StyledMotionImage
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}
            // For Mobile
            // source={images[imageIndex]}
            // For Web
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
                x: {
                  type: 'spring',
                  stiffness: 200,
                  damping: 23,
                },
              },
            }}
          />
        </AnimatedAnimatePresence>
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
        <Text>{'‣'}</Text>
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
        <Text>{'‣'}</Text>
      </Pressable>
    </Wrapper>
  );
}

export default AnimationPlugin;
