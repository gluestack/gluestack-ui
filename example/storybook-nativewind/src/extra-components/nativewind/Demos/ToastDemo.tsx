import React from 'react';
import {
  Toast,
  ToastDescription,
  ToastTitle,
} from '../../../core-components/nativewind';

const ToastDemo = () => {
  return (
    <Toast>
      <ToastTitle>Hello!</ToastTitle>
      <ToastDescription>This is a customized toast.</ToastDescription>
    </Toast>
  );
};

export default ToastDemo;
