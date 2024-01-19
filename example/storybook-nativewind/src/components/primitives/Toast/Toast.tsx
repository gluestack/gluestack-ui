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
} from '@custom-ui/themed';
import { MessageCircle, AlertTriangleIcon } from 'lucide-react-native';

const ToastFigmaStory = ({ _placement = 'top', ...props }: any) => {
  return (
    <Toast {...props} maxWidth={500}>
      <VStack space="xs" flex={1}>
        <ToastTitle>Hello World Toast</ToastTitle>
        <ToastDescription>
          Please create a support ticket from the support page
        </ToastDescription>
      </VStack>
      <Pressable>
        <Icon as={CloseIcon} />
      </Pressable>
    </Toast>
  );
};

const ToastBasic = ({ placement = 'top', ...props }: any) => {
  const toast = useToast();
  return (
    <Button
      onPress={() => {
        toast.show({
          placement: placement,
          duration: null,
          render: ({ id }) => {
            const toastId = `toast-${id}`;
            return (
              <>
                <Toast nativeID={toastId} {...props}>
                  <VStack space="xs">
                    <ToastTitle>Hello World Toast</ToastTitle>
                    <ToastDescription>
                      Please create a support tibnnbcket from the support page
                    </ToastDescription>
                  </VStack>
                  <Pressable onPress={() => toast.close(id)}>
                    <Icon as={CloseIcon} />
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

ToastBasic.description =
  'This is a basic Toast component example. Toasts are used to communicate a state that affects a system, feature or page';

export default ToastBasic;

export {
  ToastFigmaStory,
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
