/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { forwardRef, useRef, useState, useEffect } from 'react';
import { useMenu, useMenuTrigger } from '@react-native-aria/menu';
import { useTreeState, useMenuTriggerState } from 'react-stately';
import { Popover } from './MenuPopover/Popover';
import { MenuItem } from './MenuItem';
import { OverlayAnimatePresence } from './MenuPopover/OverlayAnimatePresence';
import { useTypeSelect } from './useTypeSelect';
import { useControlledState } from '@react-stately/utils';
import { MenuContext } from './MenuContext';
import { mergeRefs } from '@gluestack-ui/utils';
import { useHover } from '@react-native-aria/interactions';
import { useFocus } from '@react-native-aria/focus';

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
        useRNModal = false,
        activateOnHover,
        ...props
      }: any,
      ref?: any
    ) => {
      // const [isTriggerHovered, setIsTriggerHovered] = useState(false);
      const [contentState, setContentState] = useState({
        isContentHovered: false,
        isContentFocused: false,
      });
      const { hoverProps, isHovered: isTriggerHovered } = useHover();

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

      useEffect(() => {
        if (activateOnHover && isTriggerHovered) {
          const timer = setTimeout(() => {
            setIsOpen(true);
          }, 250);

          return () => clearTimeout(timer);
        }
      }, [activateOnHover, isTriggerHovered, setIsOpen]);

      // useEffect(() => {
      //   if (
      //     activateOnHover &&
      //     !isTriggerHovered
      //     // &&
      //     // !contentState.isContentFocused &&
      //     // !contentState.isContentHovered
      //   ) {
      //     setIsOpen(false);
      //     // console.log('useEffect closing condition');
      //   }
      // }, [
      //   activateOnHover,
      //   isTriggerHovered,
      //   // contentState.isContentFocused,
      //   // contentState.isContentHovered,
      //   setIsOpen,
      // ]);

      const { focusProps, isFocused } = useFocus();
      // console.log('menuContent popover isFocused', isFocused);
      // console.log('trigger isHovered', isTriggerHovered);

      const updatedTrigger = () => {
        return trigger({
          ...menuTriggerProps,
          ...hoverProps,
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
      } //figma

      return (
        <MenuContext.Provider value={{ onClose: handleClose, showBackdrop }}>
          {updatedTrigger()}
          <Popover
            {...focusProps}
            placement={placement}
            triggerRef={triggerRef}
            state={state}
            shouldOverlapWithTrigger={shouldOverlapWithTrigger}
            crossOffset={crossOffset}
            offset={offset}
            shouldFlip={shouldFlip}
            StyledBackdrop={StyledBackdrop}
            useRNModal={useRNModal}
            setContentState={setContentState}
          >
            <MenuComponent
              {...menuProps}
              {...props}
              isOpen={state.isOpen}
              AnimatePresence={AnimatePresence}
              autoFocus={state.focusStrategy || true}
              // autoFocus={activateOnHover ? false : state.focusStrategy || true}
              // autoFocus={false}
              onClose={() => state.close()}
              StyledMenu={StyledMenu}
              StyledMenuItem={StyledMenuItem}
              closeOnSelect={closeOnSelect}
              ref={ref}
              // {...focusProps}
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
    const state: any = useTreeState(props);
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
    // console.log('props', props);

    return (
      <OverlayAnimatePresence
        visible={isOpen}
        AnimatePresence={AnimatePresence}
      >
        <StyledMenu
          {...menuProps}
          {...typeSelectProps}
          ref={mergeRef}
          role="list"
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
