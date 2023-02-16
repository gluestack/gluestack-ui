import { Root, Title, Description } from './styled-component';
import { createToast, createToastHook } from '@universa11y/toast';
import React from 'react';
import { Pressable, Text } from 'react-native';
import Wrapper from '../Wrapper';

export const useToast = createToastHook();

export const AccessibleToast = createToast({
  Root,
  Title,
  Description,
}) as any;

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
              <AccessibleToast>
                <AccessibleToast.Title>
                  <Text>Hello World Toast {id}</Text>
                </AccessibleToast.Title>
              </AccessibleToast>
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
