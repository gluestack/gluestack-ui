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
                <FormControlLabelText
                // @ts-ignore
                >
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
