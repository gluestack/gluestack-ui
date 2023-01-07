import React, { useState } from 'react';
import { Button, useToast, ToastComponent } from '@gluestack/ui';

export function Basic({ placement, ...props }: any) {
  const toast = useToast({ placement: 'top' });
  return (
    <>
      <Button
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
