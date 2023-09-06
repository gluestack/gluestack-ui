import React from 'react';
import {
  Button,
  ButtonText,
  Toast,
  ToastTitle,
  useToast,
} from '@gluestack-ui/themed';

const ToastPlacement = ({ placement = 'top', ...props }: any) => {
  const toast = useToast();
  return (
    <Button
      onPress={() => {
        toast.show({
          placement: placement,
          render: ({ id }) => {
            return (
              <Toast nativeId={id} {...props}>
                <ToastTitle
                  dataSet={{
                    'component-props': JSON.stringify({
                      'is-text-style': true,
                      'component-name': 'Text',
                      'size': 'md',
                    }),
                  }}
                >
                  Hello World Toast {id}
                </ToastTitle>
              </Toast>
            );
          },
        });
      }}
    >
      <ButtonText
        dataSet={{
          'component-props': JSON.stringify({
            'is-text-style': true,
            'component-name': 'Text',
            'size': 'md',
          }),
        }}
      >
        Press Me
      </ButtonText>
    </Button>
  );
};

export default ToastPlacement;
