import {
  Box,
  Text,
  Heading,
  UIProvider,
  Center,
  Checkbox,
  Image,
  Pressable,
  Input,
  Link,
  Avatar,
  Switch,
  FormControl,
} from '@gluestack/ui';
import React from 'react';

import * as StyledComponent from './components';
import { ButtonBasicExample } from './screens';

// const components = {}
export default function App() {
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
        <FormControl isInvalid={true} isRequired={true}>
          <FormControl.ErrorMessage>
            <Box
              sx={{
                style: {
                  bg: '$red.500',
                  w: 20,
                  h: 20,
                },
              }}
            ></Box>
            <Text>Password Invalid</Text>
          </FormControl.ErrorMessage>

          <FormControl.Label>
            <Text>Enter Your name</Text>
          </FormControl.Label>

          <FormControl.HelperText>
            <Text>Must be atleast 6 characters.</Text>
          </FormControl.HelperText>
        </FormControl>
      </Center>
      {/* <Select placeholder="Select">
        <Select.Item value="viraj" label="viraj" />
        <Select.Item value="viraj2" label="viraj2" />
        <Select.Item value="viraj3" label="viraj3" />
      </Select> */}
      {/* <div>Hello qorldsv</div> */}
      {/* <Center
        sx={{
          style: {
            flex: 1,
            marginBottom: 20,
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
      {/* </Input.Root> */}
      {/* </Input.Root>
        <Text
          sx={{
            style: {
              bg: '$purple.500',
              p: 10,
              fontSize: 22,
              fontWeight: 'bold',
            },
          }}
        ></Text>
        <Pressable
          onPress={() => console.log('Hello world!')}
          sx={{ style: { bg: '$amber.500', p: 10 } }}
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
        </Pressable>
        <Checkbox />
        <Image
          sx={{
            style: {
              h: 100,
              w: 100,
              roundbordered: 9999,
            },
          }}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          alt="Hello"
        />
        <Switch
        // value={true}
        // onToggle={(val) => console.log(val)}
        // onValueChange={(val) => console.log(val)}
        />
        <Link
          sx={{
            style: {
              bg: '$amber.500',
            },
            state: {
              hover: {
                style: {
                  bg: '$red.500',
                },
              },
            },
          }}
          isExternal
          href="https://google.com"
        >
          <Text>Hello world</Text>
        </Link>
      </Center>
      </Center> */}
      <Center
        sx={{
          style: {
            flex: 1,
          },
        }}
      >
        <Avatar sx={{ style: { bg: '$purple.400' } }}>
          <Avatar.Image
            source={{
              uri: 'https://images.u',
            }}
          >
            <Text
              sx={{
                style: {
                  color: 'white',
                  fontWeight: 'semibold',
                  fontSize: '32px',
                },
              }}
            >
              AB
            </Text>
          </Avatar.Image>
          <Avatar.Badge />
        </Avatar>
        <Avatar sx={{ style: { bg: '$purple.400' } }}>
          <Avatar.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
          >
            <Text
              sx={{
                style: {
                  color: 'white',
                  fontWeight: 'semibold',
                  fontSize: '32px',
                },
              }}
            >
              AB
            </Text>
          </Avatar.Image>
          <Avatar.Badge />
        </Avatar>
        <Avatar.Group>
          <Avatar sx={{ style: { bg: '$purple.400' } }}>
            <Avatar.Image
              source={{
                uri: 'https://images.u',
              }}
            >
              <Text
                sx={{
                  style: {
                    color: 'white',
                    fontWeight: 'semibold',
                    fontSize: '32px',
                  },
                }}
              >
                AB
              </Text>
            </Avatar.Image>
          </Avatar>
          <Avatar sx={{ style: { bg: '$purple.400' } }}>
            <Avatar.Image
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}
            >
              <Text
                sx={{
                  style: {
                    color: 'white',
                    fontWeight: 'semibold',
                    fontSize: '32px',
                  },
                }}
              >
                AB
              </Text>
            </Avatar.Image>
          </Avatar>
        </Avatar.Group>
      </Center>
    </UIProvider>
  );
}
