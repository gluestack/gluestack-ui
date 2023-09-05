import React from 'react';
import {
  Button,
  ButtonText,
  Toast,
  ToastTitle,
  useToast,
} from '@gluestack-ui/themed';

const ToastDuplicatePrevent = ({ placement = 'top', ...props }: any) => {
  const toast = useToast();
  const idTest = 'test-id';
  return (
    <Button
      {...props}
      onPress={() => {
        if (!toast.isActive(idTest)) {
          toast.show({
            id: idTest,
            placement: placement,
            render: ({ id }) => {
              return (
                <Toast>
                  <ToastTitle>Hello World Toast {id}</ToastTitle>
                </Toast>
              );
            },
          });
        }
      }}
    >
      <ButtonText>Press Me</ButtonText>
    </Button>
  );
};

export default ToastDuplicatePrevent;
