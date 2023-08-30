//@ts-nocheck
import React from 'react';
import {
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
} from '@gluestack-ui/themed';

const ToastDemo = () => {
  return (
    <Toast nativeId={1} action="info" variant="accent">
      <VStack space="xs">
        <ToastTitle>Info</ToastTitle>
        <ToastDescription>Your order has</ToastDescription>
        <ToastDescription>been received.</ToastDescription>
      </VStack>
    </Toast>
  );
};

export default ToastDemo;
