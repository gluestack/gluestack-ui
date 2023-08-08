import React from 'react';
import { Button, ButtonText, Toast, useToast } from '../../../ui-components';

const DuplicateToastPrevent = ({ placement = 'top', ...props }: any) => {
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
                  <Toast.Title>Hello World Toast {id}</Toast.Title>
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

export default DuplicateToastPrevent;
