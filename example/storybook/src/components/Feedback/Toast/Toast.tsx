import React from 'react';
import {
  Button,
  Pressable,
  Toast,
  useToast,
  Icon,
  CloseIcon,
  VStack,
  CheckIcon,
  Center,
} from '../../../ui-components';
import { MessageCircle, AlertTriangleIcon } from 'lucide-react-native';

export const ToastStory = ({ placement = 'top', ...props }: any) => {
  const toast = useToast();
  return (
    <Center>
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
                        Please create a support ticket from the support page
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
        <Button.Text>Press Me</Button.Text>
      </Button>
    </Center>
  );
};

export {
  Toast,
  useToast,
  Icon,
  CloseIcon,
  VStack,
  CheckIcon,
  MessageCircle,
  AlertTriangleIcon,
};
