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
import {
  AsForwarder,
  styled,
  Theme,
  StyledProvider,
} from '@gluestack-style/react';
import { config } from './gluestack-ui.config';

const styleshet = StyleSheet.create({
  style: {
    padding: 12,
    backgroundColor: 'red',
    margin: 4,
  },
});

const Pressable = styled(
  RNPressable,
  {
    bg: '$blue500',
    p: '$2',
    m: '$1',

    // 'bg': '$red600',
    // 'w': 100,
    // 'h': 100,
    // '_light': {
    //   bg: '$red600',
    // },
    // '@base': {
    //   bg: '$blue500',
    // },
    // ':hover': {
    //   bg: '$red500',
    // },
  },
  {
    componentName: 'Pressable1',
    // descendantStyle: ['_text'],
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
    <StyledProvider config={config.theme} colorMode="dark">
      <ContextBasedStylesContent />
    </StyledProvider>
  );
}

export function ContextBasedStylesContent() {
  const [state, setState] = useState(false);

  // const color = tabName ? '$red500' : '$green500';
  // return (
  //   <>
  //     {/* <Theme name={'modern'}>
  //       <Box states={{ hover: true }}></Box>
  //     </Theme>
  //     <Box states={{ hover: true }}></Box> */}
  //     {/* <Icon as={Circle} size="md" color="$red500" />
  //     <Pressable
  //       onPress={() => {
  //         handleTabChange(!tabName);
  //       }}
  //       bg="$amber400"
  //       h="$50"
  //       w="$50"
  //     >
  //       <Text
  //         sx={{
  //           _dark: {
  //             color: tabName ? '$red500' : '$green500',
  //           },
  //         }}
  //       >
  //         hello world
  //       </Text>
  //     </Pressable> */}
  //   </>
  // );

  // return (
  //   <>
  //     <MyNewIcon as={AlertCircle} size="sm"></MyNewIcon>
  //   </>
  // );
  return (
    <>
      <RNPressable
        onPress={() => {
          setState(!state);
        }}
        style={{
          height: 50,
          width: 200,
          backgroundColor: 'red',
          position: 'absolute',
          top: 0,
          left: 0,
          top: 132,
        }}
      >
        <Text style={{ color: 'black' }}>{state ? 'Unmount' : 'Mount'}</Text>
      </RNPressable>
      {/* <MyPressable>
        <RNText>Hello</RNText>
      </MyPressable> */}
      {/* {state && <MyList />
      } */}
      {/* <Box pointerEvents="none" style={{ display: state ? 'flex' : 'none' }}> */}
      {state && <MyList />}
      {/* </Box> */}
    </>
  );
}

const RenderItem = (item: any) => {
  const [active, setActive] = React.useState(false);
  return (
    <Pressable
      key={item}
      onPressIn={() => setActive(true)}
      onPressOut={() => setActive(false)}
      states={{
        active,
      }}
      sx={{
        'bg': '$amber400',
        ':active': {
          bg: '$pink500',
        },
      }}
    >
      {/* <RNText>{item}</RNText> */}
    </Pressable>
  );
};

const renderItem2 = (item: any) => (
  <RNPressable key={item} style={styleshet.style}>
    {/* <RNText>{item}</RNText>r */}
  </RNPressable>
);

const MyList = React.memo(() => {
  const time = React.useRef(Date.now());
  const [endTime, setEndTime] = React.useState(0);
  useEffect(() => {
    const end = Date.now() - time.current;
    console.log(end, '>>>');
    setEndTime(end);
  }, []);
  const data = useMemo(
    () =>
      Array(1000)
        .fill(0)
        .map((_, index) => `Item ${index}`),
    []
  );

  return (
    <>
      <Text
        style={{
          position: 'absolute',
          top: 100,
          zIndex: 999,
          color: 'blue',
        }}
      >
        {endTime}
      </Text>
      {data.map((_, k) => (
        <RenderItem key={k} />
      ))}
    </>
  );
});
export default ContextBasedStyles;
