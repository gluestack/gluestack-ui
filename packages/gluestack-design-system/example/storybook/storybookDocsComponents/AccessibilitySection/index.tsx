import React from 'react';
import { Box, Text, Pressable, HStack, VStack } from '@gluestack/design-system';
import { Source } from '@storybook/addon-docs';
const AccessibilitySection = ({}) => {
  return (
    <Box>
      <Text
        color="$trueGray900"
        fontWeight="500"
        fontSize="27px"
        lineHeight="27px"
        mt={45}
        mb={10}
      >
        Accessibility
      </Text>

      <Text
        color="$trueGray700"
        fontWeight="400"
        fontSize="17px"
        lineHeight="27px"
        mb={32}
      >
        <Text
          color="$trueGray700"
          fontWeight="400"
          fontSize="17px"
          lineHeight="27px"
          mb={10}
        >
          Uses React Native ARIA{' '}
          <Pressable>
            {({ isHovered }: any) => {
              return (
                <a
                  style={{
                    color: '#7e22ce',
                    backgroundColor: '#faf5ff',
                    textDecoration: isHovered ? 'underline' : 'none',
                  }}
                  href="https://react-native-aria.geekyants.com/docs/useFocusRing"
                >
                  @react-native-aria/focus.
                </a>
              );
            }}
          </Pressable>
        </Text>{' '}
        Adheres to the{' '}
        <Pressable>
          {({ isHovered }: any) => {
            return (
              <a
                style={{
                  color: '#7e22ce',
                  backgroundColor: '#faf5ff',
                  textDecoration: isHovered ? 'underline' : 'none',
                }}
                href="https://www.w3.org/WAI/ARIA/apg/patterns/button/"
              >
                Button WAI-ARIA design pattern.
              </a>
            );
          }}
        </Pressable>{' '}
        Handles mouse, keyboard, and touch interactions, focus behavior, and
        ARIA props
      </Text>
      <Text
        mb={18}
        fontSize={18}
        lineHeight={24}
        fontWeight={500}
        color="$trueGray900"
      >
        hooks
      </Text>
      <HStack mb={16} alignItems="center">
        <Box mr={16}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" fill="#BF7EFF" />
          </svg>
        </Box>
        <Text color="$trueGray700" fontWeight="500" lineHeight={24}>
          useFocusRing (Web only)
        </Text>
      </HStack>
      <Text mb={32}>
        Determines whether a focus ring should be shown to indicate keyboard
        focus. Focus rings are visible only when the user is interacting with a
        keyboard, not with a mouse, touch, or other input methods.
      </Text>
      <Text
        mb={18}
        fontSize={18}
        lineHeight={24}
        fontWeight={500}
        color="$trueGray900"
      >
        API
      </Text>
      <Source code="useFocusRing(props: FocusRingProps, ref: RefObject): FocusRingAria" />
      <Text
        mb={18}
        fontSize={18}
        lineHeight={24}
        fontWeight={500}
        color="$trueGray900"
      >
        Implementation
      </Text>
      <Source
        language="jsx"
        code={`import React from 'react';
import { Text, Pressable} from 'react-native';
import { useFocusRing } from '@react-native-aria/focus';
export default function App() {
const {isFocusVisible, focusProps} = useFocusRing();
        
return (
        <Pressable {...focusProps} style={{outline: 0, boxShadow: isFocusVisible ? 'rgb(142, 208, 249) 0px 0px 0px 2px':''}}>
        <Text>Use keyboard and press tab to see the focus ring below</Text>
        </Pressable>
        );
}
        `}
      />
      <Text
        mb={18}
        fontSize={18}
        lineHeight={24}
        fontWeight={500}
        color="$trueGray900"
      >
        KeyBoard Interaction
      </Text>
      <Text>
        In addition, keyboard users may activate buttons using the Space or
        Enter keys.
      </Text>
      <VStack W="100%" justifyContent="center">
        <HStack w="100%" flex={1}>
          <Text>key</Text>
          <Text>Description</Text>
        </HStack>
        <HStack>
          <Box
            py={2}
            px={6}
            borderRadius="$sm"
            borderWidth={1}
            borderColor="$trueGray300"
            sx={{
              style: {
                boxShadow:
                  'inset 0 0.5px rgba(255, 255, 255, 0.1), inset 0 1px 5px hsl(206 30.0% 98.8%), 0px 0px 0px 0.5px hsl(205 10.7% 78.0%), 0px 2px 1px -1px hsl(205 10.7% 78.0%), 0 1px hsl(205 10.7% 78.0%)',
              },
            }}
          >
            <Text fontSize={13} flexBasic="30%" color="$trueGray600">
              Space
            </Text>
          </Box>
          <Text flexBasic="70%">Description</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export { AccessibilitySection };
