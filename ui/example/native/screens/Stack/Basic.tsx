import React from "react";
import { Stack, Button, ButtonText } from "@gluestack/ui";

function StackExample() {
  return (
    <>
      <Stack direction="row" space="sm">
        <Button
          onPress={() => console.log("Hello world!")}
          sx={{
            style: {
              bg: "$green.400",
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
              bg: "$green.400",
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
              bg: "$green.400",
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
              bg: "$green.400",
            },
          }}
          variant="blueBox"
          size="medium"
        >
          <ButtonText>Click me</ButtonText>
        </Button>
      </Stack>
    </>
  );
}

export default StackExample;
