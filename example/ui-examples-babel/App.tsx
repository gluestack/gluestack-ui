import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  Pressable as RNPressable,
  Text as RNText,
  StyleSheet,
  View,
  Pressable,
  Text,
} from 'react-native';
import {
  AsForwarder,
  styled,
  Theme,
  StyledProvider,
} from '@gluestack-style/react';
import { config } from './gluestack-ui.config';
import { createMotionAnimatedComponent, Motion } from '@legendapp/motion';
import { AnimationResolver } from '@gluestack-style/animation-plugin';

const Box = styled(View, {
  bg: '$yellow500',
  p: '$2',
  m: '$1',
});

const Gluestack = () => {
  const [time, setTime] = useState(Date.now());
  const [end, setEnd] = useState(0);

  React.useEffect(() => {
    setEnd(Date.now());
  }, []);

  return (
    <>
      <Text>{end - time} ms</Text>
      {new Array(1000).fill(0).map((_, k) => (
        <Box
          key={k}
          sx={{
            bg: '$red500',
            p: '$1',
          }}
        />
      ))}
    </>
  );
};

export function ContextBasedStyles() {
  const [mounted, setMounted] = useState(false);
  return (
    <View
      style={{
        marginTop: 32,
      }}
    >
      <Pressable
        style={{
          padding: 16,
          backgroundColor: 'red',
        }}
        onPress={() => setMounted(!mounted)}
      >
        <Text>Click me</Text>
      </Pressable>
      <StyledProvider config={config.theme} colorMode="dark">
        {mounted && <Gluestack />}
      </StyledProvider>
    </View>
  );
}
export default ContextBasedStyles;
