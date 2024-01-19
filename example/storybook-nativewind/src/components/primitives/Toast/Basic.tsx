import React from 'react';
import {
  Button,
  ButtonText,
  Toast,
  ToastTitle,
  useToast,
} from '@custom-ui/themed';

const ToastPlacement = ({ placement = 'top', ...props }: any) => {
  const toast = useToast();
  return (
    <Button
      onPress={() => {
        toast.show({
          placement: placement,
          render: ({ id }) => {
            return (
              <Toast nativeID={`toast-${id}`} {...props}>
                <ToastTitle>Hello World Toast {id}</ToastTitle>
              </Toast>
            );
          },
        });
      }}
    >
      <ButtonText>Press Me</ButtonText>
    </Button>
  );
};

ToastPlacement.description =
  'This is a basic Toast component example. Toasts are used to communicate a state that affects a system, feature or page';

export default ToastPlacement;
