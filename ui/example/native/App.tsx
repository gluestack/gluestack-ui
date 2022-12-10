import { Box, Text, Heading, UIProvider } from "@gluestack/ui";
import { View, StyleSheet } from "react-native";
import {
  StyledButton,
  StyledButtonText,
  StyledBox,
  StyledHeading,
  StyledText,
} from "./components";
import { ButtonBasicExample } from "./screens";

export default function App() {
  return (
    <UIProvider
      components={{
        StyledButton,
        StyledButtonText,
        StyledBox,
        StyledHeading,
        StyledText,
      }}
    >
      <View style={styles.container}>
        <ButtonBasicExample />
        <Box
          sx={{
            style: {
              bg: "$green.400",
              w: 200,
              h: 200,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            },
          }}
        >
          <Text
            sx={{
              style: {
                bg: "$purple.500",
                p: 10,
                fontSize: 22,
                fontWeight: "bold",
              },
            }}
          >
            Hello
          </Text>
          hello
        </Box>
        <Heading>Hello</Heading>
        <Text
          sx={{
            style: {
              bg: "$purple.500",
              p: 10,
              fontSize: 22,
              fontWeight: "bold",
            },
          }}
        >
          Hello
        </Text>
      </View>
    </UIProvider>
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
