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
import { CloseIcon } from '../Icons';
import { GenericComponentType } from '../../types';

const AccessibleAlertDialog = createAlertDialog({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
  //@ts-ignore
  AnimatePresence: Content.AnimatePresence,
});

const AlertDialogTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
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
  ({ ...props }: any, ref?: any) => {
    return (
      <AccessibleAlertDialog.CloseButton {...props} ref={ref}>
        <CloseIcon />
      </AccessibleAlertDialog.CloseButton>
    );
  }
);

const AccessibleAlertDialogHeader = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessibleAlertDialog.Header {...props} ref={ref}>
        {typeof children === 'string' ? (
          <Heading>{children}</Heading>
        ) : (
          children
        )}
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
      <AccessibleAlertDialog.Body {...props} ref={ref}>
        {typeof children === 'string' ? <Text>{children}</Text> : children}
      </AccessibleAlertDialog.Body>
    );
  }
);

const AlertDialogNew = AlertDialogTemp as any;
AlertDialogNew.Content = AccessibleAlertDialogContent;
AlertDialogNew.CloseButton = AccessibleAlertDialogCloseButton;
AlertDialogNew.Header = AccessibleAlertDialogHeader;
AlertDialogNew.Footer = AccessibleAlertDialogFooter;
AlertDialogNew.Body = AccessibleAlertDialogBody;

export type IAlertDialogComponentType<
  AlertDialog,
  Content,
  CloseButton,
  Header,
  Footer,
  Body
> = GenericComponentType<AlertDialog> & {
  Content: GenericComponentType<Content>;
  CloseButton: GenericComponentType<CloseButton>;
  Header: GenericComponentType<Header>;
  Footer: GenericComponentType<Footer>;
  Body: GenericComponentType<Body>;
};

export const AlertDialog = AlertDialogNew as IAlertDialogComponentType<
  typeof AccessibleAlertDialog,
  typeof AccessibleAlertDialog.Content,
  typeof AccessibleAlertDialog.CloseButton,
  typeof AccessibleAlertDialog.Header,
  typeof AccessibleAlertDialog.Footer,
  typeof AccessibleAlertDialog.Body
>;
