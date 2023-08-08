import React from 'react';
import { Button, ButtonText, Toast, useToast } from '../../../ui-components';

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
                <Toast.Title>Hello World Toast {id}</Toast.Title>
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
