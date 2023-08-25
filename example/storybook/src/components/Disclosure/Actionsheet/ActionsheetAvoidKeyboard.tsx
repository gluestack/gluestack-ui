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
  InputField,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Image,
  Text,
  Box,
  Icon,
} from '@gluestack-ui/themed';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { createIcon } from '@gluestack-ui/icon';
import { Svg, Path } from 'react-native-svg';
import { styled, AsForwarder } from '@gluestack-ui/themed';

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

function ActionsheetExample({
  showActionsheet: showActionsheetProp = true,
  ...props
}) {
  const [showActionsheet, setShowActionsheet] = React.useState(
    props.showActionsheet
  );

  useEffect(() => {
    setShowActionsheet(props.showActionsheet);
  }, [props.showActionsheet]);

  const handleClose = () => setShowActionsheet(false);

  return (
    // @ts-ignore
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''}>
      <Actionsheet
        isOpen={showActionsheet || showActionsheetProp}
        onClose={handleClose}
        {...props}
      >
        <ActionsheetBackdrop />
        <ActionsheetContent maxHeight="75%">
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
                <Text fontWeight="$bold">Mastercard</Text>
                <Text>Card ending in 2345</Text>
              </VStack>
            </HStack>
            <FormControl mt={36}>
              <FormControlLabel>
                <FormControlLabelText>
                  Confirm security code
                </FormControlLabelText>
              </FormControlLabel>
              <Input isFullWidth={true} {...props}>
                <InputIcon>
                  <Icon as={LeadingIcon} ml="$3" />
                </InputIcon>
                <InputField placeholder="CVC/CVV" />
              </Input>
              <Button onPress={handleClose} mt={20}>
                <ButtonText>Pay $1000</ButtonText>
              </Button>
            </FormControl>
          </VStack>
        </ActionsheetContent>
      </Actionsheet>
    </KeyboardAvoidingView>
  );
}

export default ActionsheetExample;

export {
  Actionsheet,
  Button,
  VStack,
  Input,
  InputIcon,
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
