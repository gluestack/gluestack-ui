import React from 'react';
import LottieView from 'lottie-react-native';
import { Box } from '@/components/ui/box';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SplashScreen = () => {
  return (
    <Box
      className="flex-1 bg-white justify-center items-center"
      style={{ width, height }}
    >
      <LottieView
        autoPlay
        loop={false}
        source={require('@/assets/animations/splash_animation.json')}
        style={{ width: 800, height: 800 }}
        speed={1.2}
      />
    </Box>
  );
};
