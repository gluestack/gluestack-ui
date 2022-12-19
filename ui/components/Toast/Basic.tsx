import React, { useState } from 'react';
import { Button, useToast, ToastComponent } from '@gluestack/ui';
import Wrapper from '../Wrapper';

export function Basic() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toast = useToast();
  console.log('toast', toast);
  return (
    <>
      <Button
        onPress={() => {
          toast.show({
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
