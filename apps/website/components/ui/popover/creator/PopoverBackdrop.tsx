import React, { forwardRef } from 'react';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { usePopover } from './PopoverContext';

const PopoverBackdrop = (StyledPopoverBackdrop: any, AnimatePresence?: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { value } = usePopover('PopperContext');
    const { handleClose } = value;

    return (
      <OverlayAnimatePresence
        visible={value?.isOpen}
        AnimatePresence={AnimatePresence}
      >
        <StyledPopoverBackdrop
          ref={ref}
          {...props}
          onPress={handleClose}
          // for ios
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
          aria-hidden={true}
        >
          {children}
        </StyledPopoverBackdrop>
      </OverlayAnimatePresence>
    );
  });

export default PopoverBackdrop;
