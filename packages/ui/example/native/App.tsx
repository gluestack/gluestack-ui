import { Box, Text, Heading, UIProvider, Center } from "@gluestack/ui";

import {
  StyledButton,
  StyledButtonText,
  StyledBox,
  StyledHeading,
  StyledText,
  StyledCenter,
  StyledVStack,
  StyledVStackSpacer,
  StyledHStack,
  StyledHStackSpacer,
} from "./components";
import {
  ButtonBasicExample,
  HStackExample,
  VStackExample,
  StackExample,
} from "./screens";

export default function App() {
  return (
    <UIProvider
      components={{
        StyledButton,
        StyledButtonText,
        StyledBox,
        StyledHeading,
        StyledText,
        StyledCenter,
        VStack: StyledVStack,
        VStackSpacer: StyledVStackSpacer,
        HStack: StyledHStack,
        HStackSpacer: StyledHStackSpacer,
      }}
    >
      <Center
        sx={{
          style: {
            flex: 1,
          },
        }}
      >
        <Text>Stack Example</Text>
        <StackExample />
        <Text>HStack Example</Text>
        <HStackExample />
        <Text>VStack Example</Text>

        <VStackExample />
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
      </Center>
    </UIProvider>
  );
}
