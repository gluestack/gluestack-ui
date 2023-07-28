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
} from 'react-native';
import { AsForwarder, styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
// import { AddIcon } from '@gluestack/design-system';
import { createIcon } from '@gluestack-ui/icon';
import { Svg } from 'react-native-svg';

// const Box = styled(View, {
//   bg: '$backgroundDark300',
//   width: '200px',
//   height: '100px',
// });

const Text = styled(
  RNText,
  {
    // bg: '$amber300',
    // color: '$red500',
    // props: {
    //   color: '$pink400',
    // },
    // variants: {
    //   variant: {
    //     solid: {
    //       color: '$green500',
    //     },
    //   },
    // },
  },
  {
    componentName: 'TEXT',
  }
);
const MyPressable = styled(
  RNPressable,
  {
    // bg: '$blue500',
    // height: 40,
    // p: 2,
    // // props: {
    // //   color: '$purple500',
    // // },
    // variants: {
    //   variant: {
    //     solid: {
    //       bg: '$red400',
    //     },
    //   },
    // },
    // defaultProps: {
    //   variant: 'solid',
    // },
  },
  {
    componentName: 'TEXT2',
  }
);

export function ContextBasedStyles() {
  return (
    <Wrapper>
      <ContextBasedStylesContent />
    </Wrapper>
  );
}

const styleshet = StyleSheet.create({
  style: {
    backgroundColor: 'blue',
    padding: 2,
    height: 40,
  },
});
export function ContextBasedStylesContent() {
  const timeTaken = useRef(Date.now());
  // useEffect(() => {
  //   console.log(Date.now() - timeTaken.current, 'hello');
  // }, []);

  const [state, setState] = useState(true);

  const data = useMemo(
    () =>
      Array(1000)
        .fill(0)
        .map((_, index) => `Item ${index}`),
    []
  );

  const renderItem = useCallback(
    (item: any) => (
      <MyPressable key={item}>
        <RNText>{item} 22222</RNText>
      </MyPressable>
    ),
    []
  );

  const renderItem2 = useCallback(
    (item: any) => (
      <RNPressable key={item} style={styleshet.style}>
        <RNText>{item}</RNText>
      </RNPressable>
    ),
    []
  );

  const handlePress = useCallback(() => {
    timeTaken.current = Date.now();
    setState(!state);
  }, [state]);

  // const layoutChange = () => {};

  // useEffect(() => {
  //   console.log(Date.now() - timeTaken.current, 'hello');
  // });

  // useEffect(() => {
  //   console.log(Date.now() - timeTaken.current, 'hello');
  // }, [state]);

  return (
    <>
      <RNPressable
        onPress={handlePress}
        style={{
          height: 50,
          width: 200,
          backgroundColor: 'red',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <Text style={{ color: 'black' }}>Mount</Text>
      </RNPressable>
      {/* <MyPressable>
        <RNText>Hello</RNText>
      </MyPressable> */}
      <View pointerEvents="none" style={{ display: state ? 'flex' : 'none' }}>
        {data.map(renderItem)}
      </View>
    </>
  );
}

export default ContextBasedStyles;
