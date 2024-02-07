import React from 'react';
import { createAlertDialog } from '@gluestack-ui/alert-dialog';
import { View, Pressable, ScrollView, Platform } from 'react-native';

import {
  tva,
  useStyleContext,
  withStates,
  withStyleContext,
} from '@gluestack-ui/nativewind-utils';

import { cssInterop } from 'nativewind';

const alertDialogStyle = tva({
  base: 'w-full h-full justify-center items-center web:pointer-events-none',

  variants: {
    size: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
      full: '',
    },
  },
});

const alertDialogContentStyle = tva({
  base: 'bg-background-50 rounded-lg overflow-hidden shadow',
  parentVariants: {
    size: {
      xs: 'w-[60%] max-w-[360px]',
      sm: 'w-[70%] max-w-[420px]',
      md: 'w-[80%] max-w-[510px]',
      lg: 'w-[90%] max-w-[640px]',
      full: 'w-full',
    },
  },
});

const alertDialogCloseButtonStyle = tva({
  base: 'p-2 z-1 rounded-sm data-[focus-visible=true]:bg-background-100 web:outline-none web:cursor-pointer',
});

const alertDialogHeaderStyle = tva({
  base: 'p-4 border-b border-border-300 justify-between items-center flex-row',
});

const alertDialogFooterStyle = tva({
  base: 'p-4 border-border-300 justify-end items-center flex-row flex-wrap',
});
const alertDialogBodyStyle = tva({ base: 'px-4 py-2' });

const alertDialogBackdropStyle = tva({
  base: 'absolute left-0 top-0 right-0 bottom-0 bg-background-950 web:cursor-default',
});

const UIAlertDialog = createAlertDialog({
  Root: withStyleContext(View),
  Content: View,
  CloseButton: Platform.OS === 'web' ? Pressable : withStates(Pressable),
  Header: View,
  Footer: View,
  Body: ScrollView,
  Backdrop: Pressable,
  //@ts-ignore
  AnimatePresence: null,
});

// @ts-ignore
cssInterop(UIAlertDialog, { className: 'style' });
cssInterop(UIAlertDialog.Content, { className: 'style' });
cssInterop(UIAlertDialog.CloseButton, { className: 'style' });
cssInterop(UIAlertDialog.Header, { className: 'style' });
cssInterop(UIAlertDialog.Footer, { className: 'style' });
cssInterop(UIAlertDialog.Body, { className: 'style' });
cssInterop(UIAlertDialog.Backdrop, { className: 'style' });

const AlertDialog = ({ className, size = 'md', ...props }: any) => {
  return (
    <UIAlertDialog
      {...props}
      className={alertDialogStyle({
        class: className,
      })}
      context={{
        size,
      }}
    />
  );
};

const AlertDialogContent = ({ className, ...props }: any) => {
  const { size } = useStyleContext();
  return (
    <UIAlertDialog.Content
      {...props}
      className={alertDialogContentStyle({
        parentVariants: {
          size,
        },
        class: className,
      })}
    />
  );
};
const AlertDialogCloseButton = ({ className, ...props }: any) => {
  return (
    <UIAlertDialog.CloseButton
      {...props}
      className={alertDialogCloseButtonStyle({
        class: className,
      })}
    />
  );
};
const AlertDialogHeader = ({ className, ...props }: any) => {
  return (
    <UIAlertDialog.Header
      {...props}
      className={alertDialogHeaderStyle({
        class: className,
      })}
    />
  );
};
const AlertDialogFooter = ({ className, ...props }: any) => {
  return (
    <UIAlertDialog.Footer
      {...props}
      className={alertDialogFooterStyle({
        class: className,
      })}
    />
  );
};
const AlertDialogBody = ({ className, ...props }: any) => {
  return (
    <UIAlertDialog.Body
      {...props}
      className={alertDialogBodyStyle({
        class: className,
      })}
    />
  );
};
const AlertDialogBackdrop = ({ className, ...props }: any) => {
  return (
    <UIAlertDialog.Backdrop
      {...props}
      className={alertDialogBackdropStyle({
        class: className,
      })}
    />
  );
};

AlertDialog.displayName = 'AlertDialog';
AlertDialogContent.displayName = 'AlertDialogContent';
AlertDialogCloseButton.displayName = 'AlertDialogCloseButton';
AlertDialogHeader.displayName = 'AlertDialogHeader';
AlertDialogFooter.displayName = 'AlertDialogFooter';
AlertDialogBody.displayName = 'AlertDialogBody';
AlertDialogBackdrop.displayName = 'AlertDialogBackdrop';

export {
  AlertDialog,
  AlertDialogContent,
  AlertDialogCloseButton,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogBackdrop,
};
