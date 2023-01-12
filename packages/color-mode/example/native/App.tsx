// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Pressable } from 'react-native';

import { styled } from 'dank-style';
import React from 'react';
import { createConfig } from '@gluestack/config';
//

createConfig({
  aliases: {
    bg: {
      property: 'backgroundColor',
      scale: 'colors',
    },
  } as const,
  tokens: {
    colors: {
      red: '#440',
    },
    space: {},
    borderWidths: {},
    radii: {},
    fonts: {},
    fontSizes: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
  } as const,
});

const Box = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$blue500',
        p: '$6',
        rounded: '$full',
      },
      state: {
        hover: {
          style: {
            bg: '$colors$red300',
          },
        },
      },
    },
    variants: {
      greenBox: {
        style: {
          bg: '$green500',
        },
        state: {
          hover: {
            style: {
              bg: '$green600',
            },
          },
        },
      },
    },
  },
  {}
);

export default function App() {
  const [isPressed, setIsPressed] = React.useState(false);
  const [isHovered, setisHovered] = React.useState(false);
  return (
    <View style={styles.container}>
      <Box
        // onPressIn={() => setIsPressed(true)}
        // onPressOut={() => setIsPressed(false)}
        // onHoverIn={() => setisHovered(true)}
        // onHoverOut={() => setisHovered(false)}
        // variant="greenBox"
        // bg="$red500"
        // hover-bg="$green600"
        // hover-web-bg="$amber600"
        // active-p="$8"
        // // active-bg="$blue600"
        // active-backgroundColor="$pink600"
        // web-bg="$blue600"
        // web-hover-bg="$gray600"
        // web-hover-p="$8"
        // // md-w="$100"
        // sm-w="$50"
        // sm-bg="$red500"
        // sm-hover-p="$6"
        // // md-hover-bg="$green600"
        // // md-hover-ios-bg="$green600"
        // hover-xxl-bg="$red500"
        // active-xxl-bg="$red500"
        // xxl-light-bg="$green600"
        // hover-light-sm-bg="$green600"
        // states={{
        //   hover: isHovered,
        //   active: isPressed,
        // }}
        sx={{
          style: {},
        }}
      />
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
