import React from 'react';
import {
  Button,
  ButtonText,
  Toast,
  ToastTitle,
  useToast,
} from '../../../ui-components';

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
        }
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

export default DuplicateToastPrevent;
