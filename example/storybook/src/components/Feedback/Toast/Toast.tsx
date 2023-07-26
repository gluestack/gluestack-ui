import React from 'react';
import {
  Button,
  Toast,
  useToast,
  Icon,
  CloseIcon,
  VStack,
  CheckIcon,
  Pressable,
  Center,
} from '../../../ui-components';
import { MessageCircle, AlertTriangleIcon } from 'lucide-react-native';

const ToastFigmaStory = ({ _placement = 'top', ...props }: any) => {
  return (
    <Toast {...props}>
      <VStack space="xs">
        <Toast.Title>Hello World Toast </Toast.Title>
        <Toast.Description>
          Please create a support ticket from the support page
        </Toast.Description>
      </VStack>
      <Pressable>
        <Icon as={CloseIcon} />
      </Pressable>
    </Toast>
  );
};

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
                    <Toast.Title>Hello World Toast </Toast.Title>
                    <Toast.Description>
                      Please create a support tibnnbcket from the support page
                    </Toast.Description>
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
      <Button.Text>Press Me</Button.Text>
    </Button>
  );
};

export default ToastFigmaStory;

export {
  ToastStory,
  Toast,
  useToast,
  Icon,
  CloseIcon,
  VStack,
  CheckIcon,
  MessageCircle,
  AlertTriangleIcon,
  Button,
  Pressable,
  Center,
};
