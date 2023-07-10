import React from 'react';
import { Button, Center, Toast, useToast } from '../../../ui-components';

export const Basic = ({ placement = 'top', ...props }: any) => {
  const toast = useToast();
  return (
    <Center>
      <Button
        onPress={() => {
          toast.show({
            placement: placement,
            render: ({ id }) => {
              return (
                <Toast nativeId={id} {...props}>
                  <Toast.Title>Hello World Toast {id}</Toast.Title>
                </Toast>
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
