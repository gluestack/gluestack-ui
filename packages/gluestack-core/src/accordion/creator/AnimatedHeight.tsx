import React, { useRef, useEffect, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';

const AnimatedHeight = ({ hide, extraHeight = 0, children }: any) => {
  const [measuredHeight, setMeasuredHeight] = useState(hide ? 0 : null);
  const opacityValue = useRef(new Animated.Value(hide ? 0 : 1)).current;
  const heightValue = useRef(new Animated.Value(hide ? 0 : 1)).current;
  const animate = hide || measuredHeight !== null;

  useEffect(() => {
    Animated.timing(opacityValue, {
      toValue: hide ? 0 : 1,
      duration: 200, // Set your transition duration here
      useNativeDriver: false,
    }).start();

    Animated.timing(heightValue, {
      toValue: hide ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [hide, heightValue, opacityValue]);

  const animatedHeight = heightValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, (measuredHeight ?? 0) + extraHeight],
  });

  return (
    <Animated.View
      style={
        animate
          ? [
              styles.hidden,
              {
                height: animatedHeight,
              },
            ]
          : undefined
      }
    >
      <Animated.View
        style={
          animate
            ? [
                StyleSheet.absoluteFill,
                styles.autoBottom,
                {
                  opacity: opacityValue,
                },
              ]
            : undefined
        }
        onLayout={(e) => {
          const height = Math.round(e.nativeEvent.layout.height);
          setMeasuredHeight(height);
        }}
      >
        {children}
      </Animated.View>
    </Animated.View>
  );
};

export default AnimatedHeight;

const styles = StyleSheet.create({
  autoBottom: {
    bottom: 'auto',
  },
  hidden: {
    overflow: 'hidden',
  },
});
