import React, { useEffect } from 'react';

import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  Button,
  ButtonText,
  VStack,
  Input,
  InputIcon,
  InputSlot,
  InputField,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Image,
  Text,
  Box,
  Icon,
} from '@custom-ui/themed';
import { KeyboardAvoidingView } from 'react-native';
import { createIcon } from '@gluestack-ui/icon';
import { Svg, Path } from 'react-native-svg';
import { styled, AsForwarder } from '@custom-ui/themed';

const IconRoot: any = styled(
  AsForwarder,
  {},
  {
    ancestorStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

const LeadingIcon = createIcon({
  Root: IconRoot,
  viewBox: '0 0 18 18',
  path: (
    <Svg fill="none">
      <Path
        d="M15 3.75H3C2.17157 3.75 1.5 4.42157 1.5 5.25V12.75C1.5 13.5784 2.17157 14.25 3 14.25H15C15.8284 14.25 16.5 13.5784 16.5 12.75V5.25C16.5 4.42157 15.8284 3.75 15 3.75Z"
        stroke="#A3A3A3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.5 7.5H16.5"
        stroke="#A3A3A3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
});

const ActionsheetWithKeyboardAvoidingViewWithSnapPoints = ({
  showActionsheet: showActionsheetProp = true,
  ...props
}) => {
  const [showActionsheet, setShowActionsheet] = React.useState(
    props.showActionsheet
  );

  useEffect(() => {
    setShowActionsheet(props.showActionsheet);
  }, [props.showActionsheet]);

  const handleClose = () => setShowActionsheet(false);

  return (
    <Actionsheet
      isOpen={showActionsheet || showActionsheetProp}
      onClose={handleClose}
      snapPoints={[50]}
      {...props}
    >
      <KeyboardAvoidingView
        behavior="position"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          position: 'relative',
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <VStack w="$full" p={20}>
            <HStack justifyContent="center" alignItems="center" space="md">
              <Box
                w={50}
                h="$full"
                px="$2"
                borderWidth={1}
                borderStyle="solid"
                borderColor="$borderLight300"
                rounded="$sm"
              >
                <Image
                  source={{ uri: 'https://i.imgur.com/UwTLr26.png' }}
                  flex={1}
                  resizeMode="contain"
                />
              </Box>
              <VStack flex={1}>
                <Text
                  fontWeight="$bold"
                  // @ts-ignore
                >
                  Mastercard
                </Text>
                <Text
                // @ts-ignore
                >
                  Card ending in 2345
                </Text>
              </VStack>
            </HStack>
            <FormControl mt={36}>
              <FormControlLabel>
                <FormControlLabelText>
                  Confirm security code
                </FormControlLabelText>
              </FormControlLabel>
              <Input isFullWidth={true} {...props}>
                <InputSlot>
                  <InputIcon as={LeadingIcon} ml="$3" />
                </InputSlot>
                <InputField placeholder="CVC/CVV" />
              </Input>
              <Button onPress={handleClose} mt={20}>
                <ButtonText>Pay $1000</ButtonText>
              </Button>
            </FormControl>
          </VStack>
        </ActionsheetContent>
      </KeyboardAvoidingView>
    </Actionsheet>
  );
};

ActionsheetWithKeyboardAvoidingViewWithSnapPoints.description =
  'This is a basic Actionsheet component example. Actionsheets are used to display a list of actions that can be performed on a page.';

export default ActionsheetWithKeyboardAvoidingViewWithSnapPoints;

export {
  Actionsheet,
  Button,
  VStack,
  Input,
  InputIcon,
  InputSlot,
  InputField,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Image,
  Text,
  Box,
  Icon,
  LeadingIcon,
  IconRoot,
};
