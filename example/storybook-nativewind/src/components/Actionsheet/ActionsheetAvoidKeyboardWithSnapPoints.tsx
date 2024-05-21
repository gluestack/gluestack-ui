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
import { KeyboardAvoidingView } from 'react-native';

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
                <Text
                  className="font-bold"
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
            <FormControl className="mt-9">
              <FormControlLabel>
                <FormControlLabelText
                // @ts-ignore
                >
                  Confirm security code
                </FormControlLabelText>
              </FormControlLabel>
              <Input isFullWidth={true} {...props}>
                {/* <InputSlot>
                  <InputIcon className="ml-3" />
                </InputSlot> */}
                <InputField placeholder="CVC/CVV" />
              </Input>
              <Button onPress={handleClose} className="mt-5">
                <ButtonText
                // @ts-ignore
                >
                  Pay $1000
                </ButtonText>
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
};
