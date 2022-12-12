import React from "react";
import { VStack, Button, ButtonText } from "@gluestack/ui";

function VStackExample() {
  return (
    <>
      <VStack space="sm">
        <Button
          onPress={() => console.log("Hello world!")}
          sx={{
            style: {
              bg: "$yellow.400",
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
              bg: "$yellow.400",
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
              bg: "$yellow.400",
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
              bg: "$yellow.400",
            },
          }}
          variant="blueBox"
          size="medium"
        >
          <ButtonText>Click me</ButtonText>
        </Button>
      </VStack>
    </>
  );
}

export default VStackExample;
