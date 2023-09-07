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
import { AddIcon, Box, Icon } from '@gluestack/design-system';
// import { AddIcon } from '@gluestack/design-system';
import { AlertCircle, Circle } from 'lucide-react-native';

const Pressable = styled(
  RNPressable,
  {
    bg: '$red500',
    p: '$2',

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
    componentName: 'Pressable',
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

const MyIcon = styled(
  AsForwarder,
  {
    variants: {
      size: {
        sm: {
          width: 32,
          height: 32,
          props: {
            size: 32,
          },
        },
        md: {
          props: {
            size: 32,
          },
          width: '$4',
          height: '$4',
        },
      },
    },
    props: {
      size: 'sm',
    },
  },
  {
    componentName: 'MyIcon',
  }
);

const MyNewIcon = styled(
  MyIcon,
  {},
  {
    componentName: 'MyNewIcon',
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
  const [state, setState] = useState(false);

  const handleTabChange = (tabName: any) => {
    setTabName(tabName);
  };

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

  return (
    <>
      <MyNewIcon as={AlertCircle} size="sm"></MyNewIcon>
    </>
  );
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

const MyList = React.memo(() => {
  const time = React.useRef(Date.now());
  useEffect(() => {
    console.log(Date.now() - time.current, '>>>');
  }, []);
  const data = useMemo(
    () =>
      Array(1)
        .fill(0)
        .map((_, index) => `Item ${index}`),
    []
  );

  const renderItem = useCallback(
    (item: any) => (
      <Pressable
        key={item}
        sx={{
          bg: '$amber400',
        }}
      >
        {/* <RNText>{item}</RNText> */}
      </Pressable>
    ),
    []
  );

  // const renderItem2 = useCallback(
  //   (item: any) => (
  //     <RNPressable key={item} style={styleshet.style}>
  //       <RNText>{item}</RNText>r
  //     </RNPressable>
  //   ),
  //   []
  // );
  return <>{data.map(renderItem)}</>;
});
export default ContextBasedStyles;
