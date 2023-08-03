import React from 'react';
import { Button, Toast, useToast } from '../../../ui-components';

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
                  <Toast.Title
                    dataSet={{
                      'component-props': JSON.stringify({
                        'is-text-style': true,
                        'component-name': 'Text',
                        'size': 'md',
                      }),
                    }}
                  >
                    Hello World Toast {id}
                  </Toast.Title>
                </Toast>
              );
            },
          });
        }
      }}
    >
      <Button.Text
        dataSet={{
          'component-props': JSON.stringify({
            'is-text-style': true,
            'component-name': 'Text',
            'size': 'md',
          }),
        }}
      >
        Press Me
      </Button.Text>
    </Button>
  );
};

export default DuplicateToastPrevent;
