import React from 'react';
import {
  Button,
  ButtonText,
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
