//@ts-nocheck
import React from 'react';
import {
  Toast,
  Button,
  useToast,
  ToastTitle,
  ToastDescription,
  VStack,
  ButtonText,
} from '../../../ui-components';

const BadgeDemo = () => {
  const toast = useToast();
  return (
    <Button
      onPress={() => {
        toast.show({
          placement: 'top',
          render: ({ id }: any) => {
            return (
              <Toast nativeId={id} variant="accent" action="success">
                <VStack space="xs">
                  <ToastTitle>Attention!</ToastTitle>
                  <ToastDescription>
                    Please review and accept our updated terms and conditions
                    before continuing to use the application.
                  </ToastDescription>
                </VStack>
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

export default BadgeDemo;
