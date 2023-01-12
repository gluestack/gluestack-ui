// import { StatusBar } from "expo-status-bar";
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { styled, StyledProvider } from '@dank-style/react';
import { config } from './dank.config';

const StyledText = styled(
  Text,
  {
    baseStyle: {
      style: {
        color: '$blue500',
      },
    },
  },
  {}
);

// const Box = styled(
//   View,
//   {
//     baseStyle: {
//       style: {
//         bg: '$blue500',
//         p: '$3',
//       },
//       state: {
//         hover: {
//           style: {
//             bg: '$red300',
//           },
//         },
//       },
//     },
//     // variants: {
//     //   greenBox: {
//     //     style: {
//     //       bg: '$red500',
//     //     },
//     //     state: {
//     //       hover: {
//     //         style: {
//     //           bg: '$red100',
//     //         },
//     //       },
//     //     },
//     //   },
//     // },
//   },
//   { resolveProps: ['colors'] },
//   {
//     aliases: {
//       c: 'color',
//     },
//     propertyTokenMap: {
//       bg: 'backgroundColor',
//     },
//     propertyResolver: {
//       colors: (value, resolver) => {
//         return value.map((val) => resolver(val));
//       },
//     },
//   }
// );

export default function App() {
  return (
    <View style={styles.container}>
      <StyledProvider config={config}>
        <StyledText>Hello styled button</StyledText>
        {/* <Box
        // variant="greenBox"
        // states={{
        //   hover: false,
        // }}
        // sx={{
        //   state: {
        //     hover: {
        //       style: {
        //         bg: "$red.500",
        //       },
        //     },
        //   },
        // }}
        >
          Hello Box
        </Box> */}
      </StyledProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
