import { Box, Text, Heading, UIProvider, Center, Input } from "@gluestack/ui";

import {
  StyledButton,
  StyledButtonText,
  StyledBox,
  StyledHeading,
  StyledText,
  StyledCenter,
  StyledInput,
  StyledInputRoot,
  StyledInputIcon,
} from "./components";
import { ButtonBasicExample } from "./screens";

export default function App() {
  return (
    <UIProvider
      components={
        {
          StyledButton,
          StyledButtonText,
          StyledBox,
          StyledHeading,
          StyledText,
          StyledCenter,
          StyledInput,
          StyledInputRoot,
          StyledInputIcon,
        } as const
      }
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
          hello
        </Box>
        <Heading>Hello</Heading>
        <Input.Root
          //@ts-ignore
          sx={{
            style: {
              borderWidth: 2,
              borderColor: "red",
              alignItems: "center",
            },
          }}
        >
          <Input.Icon
            sx={{ style: { p: "$3", h: "100%", justifyContent: "center" } }}
          >
            <Text>IconLeft</Text>
          </Input.Icon>
          <Input
            variant="outlined"
            selectionColor="red"
            // value="Kuchh bhi aa raha hee"
            // onChangeText={(text: any) => console.log(text, "Hello world")}
            type="password"
            placeholder="ajnslj"
            onKeyPress={(event: KeyboardEvent) => console.log(event)}
            sx={{
              style: {
                borderColor: "trasnaparent",
                borderWidth: 0,
              },
              state: {
                hover: {
                  style: {
                    borderColor: "$red.800",
                    //@ts-ignore
                    outlineWidth: 2,
                    outlineColor: "$red.500",
                  },
                },
                invalid: {
                  style: { borderColor: "$secondary.800" },
                },
                focus: {
                  //@ts-ignore
                  style: { borderWidth: 4, outlineColor: "$red.500" },
                },
                disabled: {
                  style: {
                    opacity: 0.4,
                  },
                },
              },
            }}
          />
          <Input.Icon
            sx={{ style: { p: "$3", h: "100%", justifyContent: "center" } }}
          >
            <Text>IconRight</Text>
          </Input.Icon>
        </Input.Root>
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
