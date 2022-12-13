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
  AddIcon,
  HamburgerIcon,
} from '@gluestack/ui';
import React from 'react';

import * as StyledComponent from './components';
import { ButtonBasicExample } from './screens';

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
        <AddIcon
          sx={{
            style: { bg: '$blue.500' },
          }}
          focusable={true}
          // stroke="#831843"
        />

        <HamburgerIcon />

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
