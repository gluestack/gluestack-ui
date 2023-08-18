import React from 'react';
import {
  Button,
  ButtonText,
  Toast,
  ToastTitle,
  useToast,
} from '@gluestack-ui/themed';

const Basic = ({ placement = 'top', ...props }: any) => {
  const toast = useToast();
  return (
    <Button
      onPress={() => {
        toast.show({
          placement: placement,
          render: ({ id }) => {
            return (
              <Toast nativeId={id} {...props}>
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

export default Basic;
