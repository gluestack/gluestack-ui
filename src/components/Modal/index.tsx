import React, { forwardRef } from 'react';
import { createModal } from '@gluestack-ui/modal';
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
import { Icon, CloseIcon } from '../Icons';
import { styled } from '../styled';

const AccessibleModal = createModal({
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

const ModalNew = forwardRef(
  (
    { children, overlayVisible = true, backdropVisible = true, ...props }: any,
    ref?: any
  ) => {
    return (
      <AccessibleModal {...props} ref={ref}>
        {overlayVisible && backdropVisible && <AccessibleModal.Backdrop />}
        {children}
      </AccessibleModal>
    );
  }
) as any;

const AccessibleModalContent = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessibleModal.Content {...props} ref={ref}>
        {children}
      </AccessibleModal.Content>
    );
  }
);

const AccessibleModalCloseButton = forwardRef(
  ({ ...props }: any, ref?: any) => {
    return (
      <AccessibleModal.CloseButton {...props} ref={ref}>
        <Icon as={CloseIcon} />
      </AccessibleModal.CloseButton>
    );
  }
);

const AccessibleModalHeader = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessibleModal.Header {...props} ref={ref}>
        {typeof children === 'string' ? (
          <Heading>{children}</Heading>
        ) : (
          children
        )}
      </AccessibleModal.Header>
    );
  }
);

const AccessibleModalFooter = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessibleModal.Footer {...props} ref={ref}>
        {children}
      </AccessibleModal.Footer>
    );
  }
);

const AccessibleModalBody = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessibleModal.Body {...props} ref={ref}>
        {typeof children === 'string' ? <Text>{children}</Text> : children}
      </AccessibleModal.Body>
    );
  }
);

ModalNew.Content = AccessibleModalContent as any;
ModalNew.CloseButton = AccessibleModalCloseButton as any;
ModalNew.Header = AccessibleModalHeader as any;
ModalNew.Footer = AccessibleModalFooter as any;
ModalNew.Body = AccessibleModalBody as any;

export const Modal = ModalNew as typeof AccessibleModal;
