// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from 'react-native';

import { styled } from '@gluestack/ui-styled';

const Box = styled(
  View,
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
  return (
    <View style={styles.container}>
      <Box
        variant="greenBox"
        // states={{
        //   hover: true,
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
      </Box>
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
