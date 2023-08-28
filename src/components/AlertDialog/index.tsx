import React, { forwardRef } from 'react';
import { createAlertDialog } from '@gluestack-ui/alert-dialog';
import {
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
} from './styled-components';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { styled } from '../styled';

export const AccessibleAlertDialog = createAlertDialog({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
  //@ts-ignore
  AnimatePresence: styled.Component,
});

const AlertDialogNew = forwardRef(({ children, ...props }: any, ref?: any) => {
  return (
    <AccessibleAlertDialog {...props} ref={ref}>
      <AccessibleAlertDialog.Backdrop />
      {children}
    </AccessibleAlertDialog>
  );
});

const AccessibleAlertDialogContent = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessibleAlertDialog.Content {...props} ref={ref}>
        {children}
      </AccessibleAlertDialog.Content>
    );
  }
);

const AccessibleAlertDialogCloseButton = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessibleAlertDialog.CloseButton {...props} ref={ref}>
        {children}
      </AccessibleAlertDialog.CloseButton>
    );
  }
);

const AccessibleAlertDialogHeader = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessibleAlertDialog.Header {...props} ref={ref}>
        <Heading>{children}</Heading>
      </AccessibleAlertDialog.Header>
    );
  }
);

const AccessibleAlertDialogFooter = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessibleAlertDialog.Footer {...props} ref={ref}>
        {children}
      </AccessibleAlertDialog.Footer>
    );
  }
);

const AccessibleAlertDialogBody = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessibleAlertDialog.Header {...props} ref={ref}>
        <Text>{children}</Text>
      </AccessibleAlertDialog.Header>
    );
  }
);

export const AlertDialog = {
  ...AccessibleAlertDialog,
  ...AlertDialogNew,
  Content: AccessibleAlertDialogContent,
  CloseButton: AccessibleAlertDialogCloseButton,
  Header: AccessibleAlertDialogHeader,
  Footer: AccessibleAlertDialogFooter,
  Body: AccessibleAlertDialogBody,
};

// console.log(AlertDialog);

// AlertDialog.Content = AccessibleAlertDialog.Content;
// AlertDialog.CloseButton = AccessibleAlertDialog.CloseButton;
// AlertDialog.Header = AccessibleAlertDialogHeader;
// AlertDialog.Footer = AccessibleAlertDialog.Footer;
// AlertDialog.Body = AccessibleAlertDialogBody;
// AlertDialog.Backdrop = AccessibleAlertDialog.Backdrop;
