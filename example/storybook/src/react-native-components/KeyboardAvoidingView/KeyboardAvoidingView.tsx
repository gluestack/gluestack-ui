import {
  KeyboardAvoidingView,
  Center,
  VStack,
  Button,
  Actionsheet,
  ActionsheetBackdrop,
  ButtonText,
  Text,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  Box,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Input,
  InputField,
  InputIcon,
  Image,
  InputSlot,
  AddIcon,
} from '@gluestack-ui/themed';
import React from 'react';
import { Platform } from 'react-native';

export default function KeyboardAvoidingViewStory() {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  return (
    <Center>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'height' : 'height'}
        style={{ flex: 1, zIndex: 999 }}
      >
        <Center h="100%" zIndex={999}>
          <Button onPress={handleClose}>
            <ButtonText>Open</ButtonText>
          </Button>
          <Actionsheet
            isOpen={showActionsheet}
            onClose={handleClose}
            zIndex={999}
          >
            <ActionsheetBackdrop />
            <ActionsheetContent maxHeight="75%" zIndex={999}>
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
                  <Input w="$full">
                    <InputSlot>
                      <InputIcon as={AddIcon} ml="$2" />
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
        </Center>
      </KeyboardAvoidingView>
    </Center>
  );
}

export {
  GluestackUIProvider,
  Button,
  Center,
  FormControl,
  FormControlLabelText,
  Text,
  VStack,
  InputIcon,
  HStack,
  InputField,
  InputSlot,
  Box,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  FormControlLabel,
  Input,
  Image,
  Icon,
  ButtonText,
  KeyboardAvoidingView,
} from '@gluestack-ui/themed';

import Wrapper from '../../components/Wrapper';

export { Wrapper };

export { config } from '@gluestack-ui/config';
