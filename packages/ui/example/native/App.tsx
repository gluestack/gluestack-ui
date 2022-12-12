import { Box, Text, Heading, UIProvider, Center, Input } from '@gluestack/ui';
import React from 'react';

import * as StyledComponent from './components';
import { ButtonBasicExample } from './screens';

// const components = {}
export default function App() {
  const myRef = React.useRef(null);

  React.useEffect(() => {
    const styleObj = {
      borderWidth: 4,
      borderRadius: 4,
      borderColor: '#22D3EE',
    };
    // @ts-ignore
    myRef?.current?.setNativeProps({
      style: styleObj,
    });
  }, [myRef]);

  return (
    <UIProvider
      components={{
        ...StyledComponent,
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
        <Text>HStack Example</Text>
        <Text>VStack Example</Text>
        <ButtonBasicExample />
        <Box
          sx={{
            style: {
              bg: '$green.400',
              w: 200,
              h: 200,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
            },
          }}
          ref={myRef}
        >
          <Text
            sx={{
              style: {
                bg: '$purple.500',
                p: 10,
                fontSize: 22,
                fontWeight: 'bold',
              },
            }}
          >
            Hello
          </Text>
        </Box>
        <Box
          sx={{
            style: {
              bg: '$red.400',
              w: 200,
              h: 200,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
            },
            descendants: {
              _text: {
                style: {
                  color: '$green.800',
                },
              },
            },
          }}
        >
          Hello
        </Box>
        <Heading>Hello</Heading>
        <Input.Root
          //@ts-ignore
          sx={{
            style: {
              borderWidth: 2,
              borderColor: 'red',
              alignItems: 'center',
            },
            state: {
              hover: {
                style: { borderColor: '$primary.500' },
              },
              focus: {
                style: { borderColor: '$secondary.500' },
              },
            },
          }}
        >
          <Input.Icon
            sx={{ style: { p: '$3', h: '100%', justifyContent: 'center' } }}
          >
            <Text>IconLeft</Text>
          </Input.Icon>
          <Input
            selectionColor="red"
            // value="Kuchh bhi aa raha hee"
            // onChangeText={(text: any) => console.log(text, "Hello world")}
            type="password"
            placeholder="ajnslj"
            onKeyPress={(event: KeyboardEvent) => console.log(event)}
            // sx={{
            //   style: {
            //     borderColor: "trasnaparent",
            //     borderWidth: 0,
            //   },
            //   state: {
            //     hover: {
            //       style: {
            //         borderColor: "$red.800",
            //         //@ts-ignore
            //         outlineWidth: 2,
            //         outlineColor: "$red.500",
            //       },
            //     },
            //     invalid: {
            //       style: { borderColor: "$secondary.800" },
            //     },
            //     focus: {
            //       //@ts-ignore
            //       style: { borderWidth: 4, outlineColor: "$red.500" },
            //     },
            //     disabled: {
            //       style: {
            //         opacity: 0.4,
            //       },
            //     },
            //   },
            // }}
          />
          {/* <Input.Icon
            sx={{ style: { p: "$3", h: "100%", justifyContent: "center" } }}
          >
            <Text>IconRight</Text>
          </Input.Icon> */}
        </Input.Root>
        <Text
          sx={{
            style: {
              bg: '$purple.500',
              p: 10,
              fontSize: 22,
              fontWeight: 'bold',
            },
          }}
        >
          Hello
        </Text>

        {/* <Checkbox /> */}
      </Center>
    </UIProvider>
  );
}
