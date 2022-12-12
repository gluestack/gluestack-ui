import { Box, Text, Heading, UIProvider, Center } from "@gluestack/ui";

import {
  StyledButton,
  StyledButtonText,
  StyledBox,
  StyledHeading,
  StyledText,
  StyledCenter,
  StyledBoxText,
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
        StyledCenter,
        StyledBoxText,
      }}
    >
      <Center
        sx={{
          style: {
            flex: 1,
          },
        }}
      >
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
        </Box>
        <Box
          sx={{
            style: {
              bg: "$red.400",
              w: 200,
              h: 200,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            },
            descendants: {
              _text: {
                style: {
                  color: "$green.800",
                },
              },
            },
          }}
        >
          Hello
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
