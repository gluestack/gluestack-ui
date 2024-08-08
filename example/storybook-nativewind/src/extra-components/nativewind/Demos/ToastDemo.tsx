import {
  Toast,
  ToastDescription,
  ToastTitle,
} from '../../../core-components/nativewind';
import React from 'react';

const ToastDemo = () => {
  return (
    <Toast action="muted" variant="solid">
      <ToastTitle>Hello!</ToastTitle>
      <ToastDescription>This is a customized toast.</ToastDescription>
    </Toast>
  );
};

export default ToastDemo;
