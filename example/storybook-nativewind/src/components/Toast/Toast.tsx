import React, { useState } from 'react';
import { Icon, CloseIcon } from '@/components/ui/icon';
import { VStack } from '@/components/ui/vstack';
import { Pressable } from '@/components/ui/pressable';
import {
  Toast,
  ToastTitle,
  ToastDescription,
  useToast,
} from '@/components/ui/toast';
import { Button, ButtonText } from '@/components/ui/button';

const ToastFigmaStory = ({ _placement = 'top', _colorMode, ...props }: any) => {
  return (
    <Toast {...props} className="max-w-[500px]">
      <VStack space="xs" className="flex-1">
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

const ToastBasic = ({ ...props }: any) => {
  const toast = useToast();
  const [toastId, setToastId] = useState<number>(0);

  const handleToast = () => {
    if (!toast.isActive(toastId)) {
      showNewToast();
    }
  };

  const showNewToast = () => {
    const newId = Math.random();
    setToastId(newId);

    toast.show({
      id: newId,
      placement: props.placement,
      duration: 3000,
      // duration: null,
      render: ({ id }) => {
        const uniqueToastId = `toast-${id}`;
        return (
          <Toast nativeID={uniqueToastId} {...props} className="flex-row gap-3">
            <VStack space="xs">
              <ToastTitle>Hello!</ToastTitle>
              <ToastDescription>
                This is a customized toast message.
              </ToastDescription>
            </VStack>
            <Pressable onPress={() => toast.close(id)}>
              <Icon as={CloseIcon} className="stroke-background-200" />
            </Pressable>
          </Toast>
        );
      },
    });
  };

  return (
    <Button onPress={handleToast}>
      <ButtonText>Press Me</ButtonText>
    </Button>
  );
};

ToastBasic.description =
  'This is a basic Toast component example. Toasts are used to communicate a state that affects a system, feature or page';

export default ToastBasic;

export { ToastFigmaStory, Toast, ToastTitle, ToastDescription, useToast };
