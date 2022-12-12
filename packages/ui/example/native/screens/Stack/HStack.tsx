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
          <ButtonText>Click me 1 </ButtonText>
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
          <ButtonText>Click me 2</ButtonText>
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
          <ButtonText>Click me 3</ButtonText>
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
          <ButtonText>Click me 4</ButtonText>
        </Button>
      </HStack>
    </>
  );
}

export default HStackExample;
