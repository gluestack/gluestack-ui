import { createPopover } from '@gluestack-ui/popover';
import { styled } from '../styled';
import {
  Root,
  Arrow,
  Content,
  Header,
  Footer,
  Body,
  Backdrop,
  CloseButton,
} from './styled-components';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { Icon, CloseIcon } from '../Icons';
import React, { forwardRef } from 'react';

export const AccessiblePopover = createPopover({
  Root,
  Arrow,
  Content,
  Header,
  Footer,
  Body,
  Backdrop,
  CloseButton,
  //@ts-ignore
  AnimatePresence: styled.Component,
});

let Pop = AccessiblePopover;

const PopoverNew = forwardRef(
  (
    { children, overlayVisible = true, backdropVisible = true, ...props }: any,
    ref?: any
  ) => {
    return (
      <AccessiblePopover {...props} ref={ref}>
        {overlayVisible && backdropVisible && <AccessiblePopover.Backdrop />}
        {children}
      </AccessiblePopover>
    );
  }
);

const AccessiblePopoverContent = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessiblePopover.Content {...props} ref={ref}>
        {children}
      </AccessiblePopover.Content>
    );
  }
);

const AccessiblePopoverCloseButton = forwardRef(
  ({ ...props }: any, ref?: any) => {
    return (
      <AccessiblePopover.CloseButton {...props} ref={ref}>
        <Icon as={CloseIcon} />
      </AccessiblePopover.CloseButton>
    );
  }
);

const AccessiblePopoverHeader = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessiblePopover.Header {...props} ref={ref}>
        {typeof children === 'string' ? (
          <Heading>{children}</Heading>
        ) : (
          children
        )}
      </AccessiblePopover.Header>
    );
  }
);

const AccessiblePopoverFooter = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessiblePopover.Footer {...props} ref={ref}>
        {children}
      </AccessiblePopover.Footer>
    );
  }
);

const AccessiblePopoverBody = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessiblePopover.Body {...props} ref={ref}>
        {typeof children === 'string' ? <Text>{children}</Text> : children}
      </AccessiblePopover.Body>
    );
  }
);

Pop = {
  ...AccessiblePopover,
  ...PopoverNew,
  Content: AccessiblePopoverContent,
  CloseButton: AccessiblePopoverCloseButton,
  Header: AccessiblePopoverHeader,
  Footer: AccessiblePopoverFooter,
  Body: AccessiblePopoverBody,
};

export const Popover = Pop;

// export const PopoverArrow = Popover.Arrow;
// export const PopoverContent = Popover.Content;
// export const PopoverHeader = Popover.Header;
// export const PopoverFooter = Popover.Footer;
// export const PopoverBody = Popover.Body;
// export const PopoverBackdrop = Popover.Backdrop;
// export const PopoverCloseButton = Popover.CloseButton;
