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

const Pressable = styled(
  RNPressable,
  {
    'bg': '$red500',
    // 'bg': '$red600',
    'w': 100,
    'h': 100,
    '_light': {
      bg: '$red600',
    },
    '@base': {
      bg: '$blue500',
    },
    ':hover': {
      bg: '$red500',
    },
  },
  {
    componentName: 'Pressable',
    descendantStyle: ['_text'],
  }
);

const Text = styled(
  RNText,
  {},
  {
    componentName: 'Text',
  }
);

export function ContextBasedStyles() {
  return (
    <Wrapper colorMode="dark">
      <ContextBasedStylesContent />
    </Wrapper>
  );
}

export function ContextBasedStylesContent() {
  // return <MyFlatList></MyFlatList>;

  const [tabName, setTabName] = useState(true);

  const handleTabChange = (tabName: any) => {
    setTabName(tabName);
  };

  // const color = tabName ? '$red500' : '$green500';
  return (
    <>
      {/* <Theme name={'modern'}>
        <Box states={{ hover: true }}></Box>
      </Theme>
      <Box states={{ hover: true }}></Box> */}

      <Pressable
        // onPress={() => handleTabChange(tabName)}
        onPress={() => {
          handleTabChange(!tabName);
        }}
        bg="$amber400"
        h="$50"
        w="$50"
      >
        <Text
          // color={tabName ? '$red500' : '$green500'}
          sx={{
            // color: tabName ? '$red500' : '$green500',
            _dark: {
              // color: '$red500',
              color: tabName ? '$red500' : '$green500',
            },
          }}
        >
          hello world
        </Text>
      </Pressable>
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
