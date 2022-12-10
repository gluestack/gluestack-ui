import { Button, ButtonText, Heading, UIProvider } from "@gluestack/ui";
import { View, StyleSheet } from "react-native";
import { StyledButton, StyledButtonText } from "./components";
import { ButtonBasicExample } from "./screens";

export default function App() {
  return (
    <UIProvider components={{ StyledButton, StyledButtonText }}>
      <View style={styles.container}>
        <ButtonBasicExample />
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
