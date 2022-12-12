import { Box, Text, Heading, UIProvider, Center } from '@gluestack/ui';
import React from 'react';
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
  StyledBoxText,
  StyledHStackSpacer,
  StyledBoxText,
} from './components';
import {
  ButtonBasicExample,
  HStackExample,
  VStackExample,
  StackExample,
} from './screens';

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
        StyledButton,
        StyledButtonText,
        StyledBox,
        StyledHeading,
        StyledText,
        StyledBoxText,
        StyledCenter,
        VStack: StyledVStack,
        VStackSpacer: StyledVStackSpacer,
        HStack: StyledHStack,
        HStackSpacer: StyledHStackSpacer,
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
      </Center>
    </UIProvider>
  );
}
