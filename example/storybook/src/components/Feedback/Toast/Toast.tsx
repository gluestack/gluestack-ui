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
          accessibilityAnnouncement: 'hello',
          accessibilityLiveRegion: 'polite',
          avoidKeyboard: false,

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
      <Button
        onPress={() => {
          toast.show({
            placement: placement,
            duration: null,
            accessibilityAnnouncement: 'hello',
            accessibilityLiveRegion: 'polite',
            avoidKeyboard: false,

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
};
