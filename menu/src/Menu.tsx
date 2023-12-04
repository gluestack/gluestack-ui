/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { forwardRef, useRef } from 'react';
import { useMenu, useMenuTrigger } from '@react-native-aria/menu';
import { useTreeState, useMenuTriggerState } from 'react-stately';
import { Popover } from './MenuPopover/Popover';
import { MenuItem } from './MenuItem';
import { OverlayAnimatePresence } from './MenuPopover/OverlayAnimatePresence';
import { useTypeSelect } from './useTypeSelect';
import { useControlledState } from '@react-stately/utils';
import { MenuContext } from './MenuContext';
import { mergeRefs } from '@gluestack-ui/utils';
export const Menu = ({
  StyledMenu,
  StyledMenuItem,
  StyledBackdrop,
  AnimatePresence,
}: any) => {
  return forwardRef(
    (
      {
        crossOffset,
        closeOnSelect,
        defaultIsOpen,
        isOpen: isOpenProp,
        onOpen,
        onClose,
        offset,
        placement = 'bottom start',
        shouldFlip = true,
        trigger,
        shouldOverlapWithTrigger,
        _experimentalOverlay = false,
        ...props
      }: any,
      ref?: any
    ) => {
      const [isOpen, setIsOpen] = useControlledState(
        isOpenProp,
        defaultIsOpen,
        (isOpenValue) => {
          isOpenValue ? onOpen?.() : onClose?.();
        }
      );

      const handleClose = () => {
        setIsOpen(false);
      };

      const showBackdrop = React.useRef(false);

      const state = useMenuTriggerState({
        isOpen: isOpen || false,
        //@ts-ignore
        closeOnSelect: closeOnSelect,
        onOpenChange: (isOpenValue: boolean) => {
          setIsOpen(isOpenValue);
        },
        defaultOpen: defaultIsOpen,
      });

      const triggerRef = React.useRef(null);
      const { menuTriggerProps, menuProps } = useMenuTrigger(
        {},
        state,
        triggerRef
      );

      const updatedTrigger = () => {
        return trigger({
          ...menuTriggerProps,
          ref: triggerRef,
        });
      };

      if (_experimentalOverlay) {
        return (
          <MenuContext.Provider value={{ onClose: handleClose, showBackdrop }}>
            {updatedTrigger()}

            <MenuComponent
              {...menuProps}
              {...props}
              isOpen={state.isOpen}
              AnimatePresence={AnimatePresence}
              autoFocus={state.focusStrategy || true}
              onClose={() => state.close()}
              StyledMenu={StyledMenu}
              StyledMenuItem={StyledMenuItem}
              closeOnSelect={closeOnSelect}
              ref={ref}
            />
          </MenuContext.Provider>
        );
      }

      return (
        <MenuContext.Provider value={{ onClose: handleClose, showBackdrop }}>
          {updatedTrigger()}
          <Popover
            placement={placement}
            triggerRef={triggerRef}
            state={state}
            AnimatePresence={AnimatePresence}
            shouldOverlapWithTrigger={shouldOverlapWithTrigger}
            crossOffset={crossOffset}
            offset={offset}
            shouldFlip={shouldFlip}
            StyledBackdrop={StyledBackdrop}
          >
            <MenuComponent
              {...menuProps}
              {...props}
              isOpen={state.isOpen}
              AnimatePresence={AnimatePresence}
              autoFocus={state.focusStrategy || true}
              onClose={() => state.close()}
              StyledMenu={StyledMenu}
              StyledMenuItem={StyledMenuItem}
              closeOnSelect={closeOnSelect}
              ref={ref}
            />
          </Popover>
        </MenuContext.Provider>
      );
    }
  );
};
const MenuComponent = forwardRef(
  (
    {
      StyledMenu,
      StyledMenuItem,
      AnimatePresence,
      isOpen,
      closeOnSelect,
      ...props
    }: any,
    ref?: any
  ) => {
    const state = useTreeState(props);
    const menuRef = useRef(null);
    const mergeRef = mergeRefs([menuRef, ref]);
    const { menuProps } = useMenu(props, state, menuRef);
    const {
      onClose,
      onOpen,
      selectionMode,
      onSelectChange,
      shouldFlip,
      children,
      placement,
      offset,
      crossOffset,
      trigger,
      StyledBackdrop,
      ...restProps
    } = props;
    const typeSelectProps = useTypeSelect(state);

    return (
      <OverlayAnimatePresence
        visible={isOpen}
        AnimatePresence={AnimatePresence}
      >
        <StyledMenu
          {...menuProps}
          {...typeSelectProps}
          ref={mergeRef}
          {...restProps}
        >
          {[...state.collection].map((item) => (
            <MenuItem
              StyledMenuItem={StyledMenuItem}
              key={item.key}
              item={item}
              state={state}
              onAction={props.onAction}
              onClose={props.onClose}
              closeOnSelect={closeOnSelect}
            />
          ))}
        </StyledMenu>
      </OverlayAnimatePresence>
    );
  }
);
