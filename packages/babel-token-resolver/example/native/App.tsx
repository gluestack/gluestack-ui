// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

import { styled as xyz } from "@gluestack/styled";

const Box = xyz(
  View,
  {
    baseStyle: {
      style: {
        bg: "$primary.500",
        p: "$3",
      },
      state: {
        hover: {
          style: {
            bg: "$red.300",
          },
        },
      },
    },
    variants: {
      greenBox: {
        style: {
          bg: "$red.500",
        },
        state: {
          hover: {
            style: {
              bg: "$red.100",
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
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
