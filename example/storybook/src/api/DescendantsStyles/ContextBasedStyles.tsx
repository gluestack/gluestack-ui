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
import { AsForwarder, styled, Theme } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
// import { AddIcon } from '@gluestack/design-system';

const Box = styled(
  View,
  {
    'bg': '$red500',
    // 'bg': '$red600',
    'w': 100,
    'h': 100,
    '_light': {
      bg: '$red600',
    },
    '@base': {
      bg: '$green500',
    },
    ':hover': {
      bg: '$red500',
    },
  },
  {
    componentName: 'BOX2',
    descendantStyle: ['_text'],
  }
);

export function ContextBasedStyles() {
  return (
    <Wrapper>
      <ContextBasedStylesContent />
    </Wrapper>
  );
}

export function ContextBasedStylesContent() {
  // return <MyFlatList></MyFlatList>;
  return (
    <>
      <Theme name={'modern'}>
        <Box states={{ hover: true }}></Box>
      </Theme>
      <Box states={{ hover: true }}></Box>
    </>
  );

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
      {/* {state && <MyList />
      } */}
      <Box pointerEvents="none" style={{ display: state ? 'flex' : 'none' }}>
        <MyList />
      </Box>
    </>
  );
}

const MyList = React.memo(() => {
  const time = React.useRef(Date.now());
  useEffect(() => {
    console.log(Date.now() - time.current, '>>>');
  }, []);
  const data = useMemo(
    () =>
      Array(2000)
        .fill(0)
        .map((_, index) => `Item ${index}`),
    []
  );

  const renderItem = useCallback(
    (item: any) => (
      <MyPressable key={item}>
        <RNText>{item}</RNText>
      </MyPressable>
    ),
    []
  );

  const renderItem2 = useCallback(
    (item: any) => (
      <RNPressable key={item} style={styleshet.style}>
        <RNText>{item}</RNText>r
      </RNPressable>
    ),
    []
  );
  return <>{data.map(renderItem)}</>;
});
export default ContextBasedStyles;
