import React, { forwardRef } from 'react';
// import type { IMenuProps } from './types';
// import { Popper } from '../Popper';
import { AccessibilityInfo } from 'react-native';
import { useControllableState } from '../hooks';
import { useMenuTrigger } from './useMenu';
import { PresenceTransition } from '../Transitions';
// import { FocusScope } from '@react-native-aria/focus';
import { MenuContext } from './context';
// import { UIContext } from '../UIProvider';
import { Overlay } from '../Overlay';

const Menu = ({
  trigger,
  closeOnSelect = true,
  // children,
  onOpen,
  onClose,
  isOpen: isOpenProp,
  defaultIsOpen,
  // placement = 'bottom left',
  ...props
}: any) =>
  // ref?: any
  {
    // const { StyledMenu, StyledMenuTrigger } = React.useContext(UIContext);

    const triggerRef = React.useRef(null);
    const [isOpen, setIsOpen] = useControllableState({
      value: isOpenProp,
      defaultValue: defaultIsOpen,
      onChange: (value) => {
        value ? onOpen && onOpen() : onClose && onClose();
      },
    });

    const {
      // _overlay,
      // _presenceTransition,
      // _backdrop,
      useRNModal,
      // ...resolvedProps
    } = props;
    const handleOpen = React.useCallback(() => {
      setIsOpen(true);
    }, [setIsOpen]);

    const handleClose = React.useCallback(() => {
      setIsOpen(false);
    }, [setIsOpen]);

    const triggerProps = useMenuTrigger({
      handleOpen,
      isOpen,
    });

    const updatedTrigger = () => {
      return trigger(
        {
          ...triggerProps,
          ref: triggerRef,
          onPress: handleOpen,
        },
        { open: isOpen }
      );
    };

    React.useEffect(() => {
      if (isOpen) {
        AccessibilityInfo.announceForAccessibility('Popup window');
      }
    }, [isOpen]);

    const contextValue = React.useMemo(() => {
      return {
        handleClose,
        closeOnSelect,
        isOpen,
      };
    }, [handleClose, closeOnSelect, isOpen]);

    return (
      <>
        {updatedTrigger()}
        <Overlay
          isOpen={isOpen}
          onRequestClose={handleClose}
          useRNModalOnAndroid
          useRNModal={useRNModal}
          // {..._overlay}
        >
          <MenuContext.Provider value={contextValue}>
            <PresenceTransition visible={isOpen}>
              {/* <Popper
                triggerRef={triggerRef}
                onClose={handleClose}
                placement={placement}
                {...resolvedProps}
              >
                {children}
              </Popper> */}
            </PresenceTransition>
          </MenuContext.Provider>
        </Overlay>
      </>
    );
  };

export default forwardRef(Menu);
