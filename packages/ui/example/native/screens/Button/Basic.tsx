import React from "react";
import { Button, ButtonText } from "@gluestack/ui";

function ButtonBasicExample() {
  return (
    <Button onPress={() => console.log("Hello world!")}>
      <ButtonText>Click me</ButtonText>
    </Button>
  );
}

export default ButtonBasicExample;
