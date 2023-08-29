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
);

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

export const Modal = {
  ...AccessibleModal,
  ...ModalNew,
  Content: AccessibleModalContent,
  CloseButton: AccessibleModalCloseButton,
  Header: AccessibleModalHeader,
  Footer: AccessibleModalFooter,
  Body: AccessibleModalBody,
};

// export const ModalContent = Modal.Content;
// export const ModalCloseButton = Modal.CloseButton;
// export const ModalHeader = Modal.Header;
// export const ModalFooter = Modal.Footer;
// export const ModalBody = Modal.Body;
// export const ModalBackdrop = Modal.Backdrop;
