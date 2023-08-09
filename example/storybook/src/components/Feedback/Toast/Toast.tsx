import React from 'react';
import {
  Button,
  ButtonText,
  Toast,
  ToastTitle,
  ToastDescription,
  useToast,
  Icon,
  CloseIcon,
  VStack,
  CheckIcon,
  Pressable,
  Center,
} from '../../../ui-components';
import { MessageCircle, AlertTriangleIcon } from 'lucide-react-native';

const ToastStory = ({ placement = 'top', ...props }: any) => {
  const toast = useToast();
  return (
    <Button
      onPress={() => {
        toast.show({
          placement: placement,
          duration: null,
          render: ({ id }) => {
            return (
              <>
                <Toast nativeID={id} {...props}>
                  <VStack space="xs">
                    <ToastTitle>Hello World Toast </ToastTitle>
                    <ToastDescription>
                      Please create a support tibnnbcket from the support page
                    </ToastDescription>
                  </VStack>
                  <Pressable onPress={() => toast.close(id)}>
                    <Icon as={CloseIcon} color="$coolGray50" />
                  </Pressable>
                </Toast>
              </>
            );
          },
        });
      }}
    >
      <ButtonText>Press Me</ButtonText>
    </Button>
  );
};

export default ToastStory;

export {
  Toast,
  ToastTitle,
  ToastDescription,
  useToast,
  Icon,
  CloseIcon,
  VStack,
  CheckIcon,
  MessageCircle,
  AlertTriangleIcon,
  Button,
  ButtonText,
  Pressable,
  Center,
};
