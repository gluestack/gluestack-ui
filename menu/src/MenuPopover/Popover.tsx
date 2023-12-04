import React from 'react';
import { useControllableState } from '@gluestack-ui/hooks';
import { Overlay } from '@gluestack-ui/overlay';
import { PopoverProvider } from './PopoverContext';
import { FocusScope as FocusScopeAria } from '@react-native-aria/focus';
import { PopoverContent } from './PopoverContent';
import { MenuContext } from '../MenuContext';
export const Popover = ({
  state,
  onOpen,
  trigger,
  children,
  defaultIsOpen = false,
  initialFocusRef,
  finalFocusRef,
  useRNModal,
  trapFocus = true,
  placement = 'bottom',
  shouldOverlapWithTrigger = false,
  crossOffset,
  offset,
  triggerRef,
  AnimatePresence,
  shouldFlip,
  focusScope = true,
  StyledBackdrop,
}: any) => {
  const [isOpen, setIsOpen] = useControllableState({
    value: state?.isOpen,
    defaultValue: defaultIsOpen,
    onChange: (value) => {
      value ? onOpen && onOpen() : state.close && state.close();
    },
  });
  const { onClose } = React.useContext(MenuContext);

  const [bodyMounted, setBodyMounted] = React.useState(false);
  const [headerMounted, setHeaderMounted] = React.useState(false);

  let idCounter = 0;

  function uniqueId(prefix = '') {
    const id = ++idCounter;
    return prefix + id;
  }

  const id = uniqueId();

  const popoverContentId = `${id}-content`;
  const headerId = `${popoverContentId}-header`;
  const bodyId = `${popoverContentId}-body`;

  const handleOpen = React.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const handleClose = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const updatedTrigger = (reference: any) => {
    if (trigger) {
      return trigger(
        {
          'ref': reference,
          'onPress': handleOpen,
          'aria-expanded': isOpen ? true : false,
          'aria-controls': isOpen ? popoverContentId : undefined,
          'aria-haspopup': true,
        },
        { open: isOpen }
      );
    }
    return null;
  };

  const targetRefTemp = React.useRef(null);
  const targetRef = triggerRef || targetRefTemp;

  return (
    <>
      {updatedTrigger(targetRef)}
      <Overlay
        isOpen={isOpen}
        onRequestClose={handleClose}
        isKeyboardDismissable
        useRNModal={useRNModal}
      >
        <PopoverProvider
          value={{
            onClose: handleClose,
            targetRef,
            strategy: 'absolute',
            handleClose: handleClose,
            initialFocusRef,
            finalFocusRef,
            popoverContentId,
            bodyId,
            headerId,
            headerMounted,
            bodyMounted,
            setBodyMounted,
            setHeaderMounted,
            isOpen,
            placement,
            shouldOverlapWithTrigger,
            crossOffset,
            offset,
            shouldFlip,
          }}
        >
          <StyledBackdrop
            onPress={onClose}
            tabIndex={-1}
            // for ios
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            aria-hidden={true}
          />
          <FocusScopeComponent trapFocus={trapFocus} focusScope={focusScope}>
            <PopoverContent AnimatePresence={AnimatePresence}>
              {children}
            </PopoverContent>
          </FocusScopeComponent>
        </PopoverProvider>
      </Overlay>
    </>
  );
};

const FocusScopeComponent = ({ trapFocus, focusScope, children }: any) => {
  if (focusScope)
    return (
      <FocusScopeAria contain={trapFocus} restoreFocus autoFocus>
        {children}
      </FocusScopeAria>
    );
  return children;
};
