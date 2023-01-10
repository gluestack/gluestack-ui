import React from 'react';
import { Button, useToast, ToastComponent } from '@gluestack/design-system';

export function Basic({ placement = 'top', ...props }: any) {
  const toast = useToast();
  return (
    <>
      <Button
        {...props}
        onPress={() => {
          toast.show({
            placement: placement,
            render: ({ id }) => {
              return (
                <ToastComponent nativeId={id}>
                  <ToastComponent.Title>
                    Hello World Toast {id}
                  </ToastComponent.Title>
                </ToastComponent>
              );
            },
          });
        }}
      >
        <Button.Text>Press Me</Button.Text>
      </Button>
    </>
  );
}
