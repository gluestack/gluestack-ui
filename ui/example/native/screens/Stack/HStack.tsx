import React from "react";
import { HStack, Button, ButtonText } from "@gluestack/ui";

function HStackExample() {
  return (
    <>
      <HStack space="sm">
        <Button
          onPress={() => console.log("Hello world!")}
          sx={{
            style: {
              bg: "$violet.400",
            },
          }}
          variant="blueBox"
          size="medium"
        >
          <ButtonText>Click me</ButtonText>
        </Button>
        <Button
          onPress={() => console.log("Hello world!")}
          sx={{
            style: {
              bg: "$violet.400",
            },
          }}
          variant="blueBox"
          size="medium"
        >
          <ButtonText>Click me</ButtonText>
        </Button>
        <Button
          onPress={() => console.log("Hello world!")}
          sx={{
            style: {
              bg: "$violet.400",
            },
          }}
          variant="blueBox"
          size="medium"
        >
          <ButtonText>Click me</ButtonText>
        </Button>
        <Button
          onPress={() => console.log("Hello world!")}
          sx={{
            style: {
              bg: "$violet.400",
            },
          }}
          variant="blueBox"
          size="medium"
        >
          <ButtonText>Click me</ButtonText>
        </Button>
      </HStack>
    </>
  );
}

export default HStackExample;
