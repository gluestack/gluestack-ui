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
} from '@/components/ui';
import { KeyboardAvoidingView, Platform } from 'react-native';

const ActionsheetWithKeyboardAvoidingView = ({
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
    // @ts-ignore
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Actionsheet
        isOpen={showActionsheet || showActionsheetProp}
        onClose={handleClose}
        {...props}
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
                <InputSlot>
                  <InputIcon ml="$3" />
                </InputSlot>
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
};

ActionsheetWithKeyboardAvoidingView.description =
  'This is an example of an Actionsheet component with KeyboardAvoidingView. This is used to avoid the keyboard when it is opened.';

export default ActionsheetWithKeyboardAvoidingView;

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
  KeyboardAvoidingView,
  Platform,
};
