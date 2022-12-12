import {
  Box,
  Text,
  Heading,
  UIProvider,
  Center,
  Checkbox,
  Select,
} from '@gluestack/ui';
import React from 'react';

import * as StyledComponent from './components';
import {
  ButtonBasicExample,
  HStackExample,
  VStackExample,
  StackExample,
} from './screens';

// const components = {}
export default function App() {
  return (
    <UIProvider
      components={{
        ...StyledComponent,
      }}
    >
      <Select placeholder="Select">
        <Select.Item value="viraj" label="viraj" />
        <Select.Item value="viraj2" label="viraj2" />
        <Select.Item value="viraj3" label="viraj3" />
      </Select>
      {/* <div>Hello qorldsv</div> */}
      {/* <Center
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

        <Checkbox />
      </Center> */}
    </UIProvider>
  );
}
