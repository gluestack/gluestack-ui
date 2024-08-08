import React, { useEffect } from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
} from '@/components/ui/actionsheet';
import { VStack } from '@/components/ui/vstack';
import { Input, InputIcon, InputSlot, InputField } from '@/components/ui/input';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { Icon } from '@/components/ui/icon';
import { Button, ButtonText } from '@/components/ui/button';

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
          <VStack className="w-full p-5">
            <HStack space="md" className="justify-center items-center">
              <Box className="w-[50px] h-full px-2 border border-solid border-outline-300 rounded">
                <Image
                  source={{ uri: 'https://i.imgur.com/UwTLr26.png' }}
                  alt="image"
                  resizeMode="contain"
                  className="flex-1"
                />
              </Box>
              <VStack className="flex-1">
                <Text className="font-bold">Mastercard</Text>
                <Text>Card ending in 2345</Text>
              </VStack>
            </HStack>
            <FormControl className="mt-9">
              <FormControlLabel>
                <FormControlLabelText>
                  Confirm security code
                </FormControlLabelText>
              </FormControlLabel>
              <Input isFullWidth={true} {...props}>
                <InputField placeholder="CVC/CVV" />
              </Input>
              <Button onPress={handleClose} className="mt-5">
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
