import { Root, Title, Description } from './styled-component';
import { createToastComponent, createToastHook } from '@universa11y/toast';
import React from 'react';
import { Pressable, Text } from 'react-native';
import Wrapper from '../Wrapper';

const useToast = createToastHook();

const ToastTemp = createToastComponent({
  Root,
  Title,
  Description,
});

export const Toast = () => {
  return (
    <Wrapper>
      <ToastWithHook />
    </Wrapper>
  );
};

const ToastWithHook = () => {
  const toast = useToast();
  return (
    <Pressable
      onPress={() => {
        toast.show({
          placement: 'bottom',
          render: ({ id }: any) => {
            return (
              <ToastTemp>
                <ToastTemp.Title>
                  <Text>Hello World Toast {id}</Text>
                </ToastTemp.Title>
              </ToastTemp>
            );
          },
        });
      }}
    >
      <Text>Press Me</Text>
    </Pressable>
  );
};

export default Toast;
