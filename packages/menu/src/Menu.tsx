import React, { forwardRef, useRef } from 'react';
import { useMenu, useMenuTrigger } from '@react-native-aria/menu';
import { useTreeState, useMenuTriggerState } from 'react-stately';
import { Popover } from './MenuPopover/Popover';
import { MenuItem } from './MenuItem';
import { OverlayAnimatePresence } from './MenuPopover/OverlayAnimatePresence';
import { useTypeSelect } from './useTypeSelect';
import { useControlledState } from '@react-stately/utils';

export const Menu = ({ StyledMenu, StyledMenuItem, AnimatePresence }: any) => {
  return forwardRef(
    ({
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
      ...props
    }: any) => {
      const [isOpen, setIsOpen] = useControlledState(
        isOpenProp,
        defaultIsOpen,
        (isOpenValue) => {
          isOpenValue ? onOpen?.() : onClose?.();
        }
      );
      const state = useMenuTriggerState({
        isOpen: isOpen,
        closeOnSelect: closeOnSelect,
        onOpenChange: (isOpenValue) => {
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

      return (
        <>
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
            />
          </Popover>
        </>
      );
    }
  );
};
const MenuComponent = ({
  StyledMenu,
  StyledMenuItem,
  AnimatePresence,
  isOpen,
  ...props
}: any) => {
  const state = useTreeState(props);
  const ref = useRef(null);
  const { menuProps } = useMenu(props, state, ref);
  const typeSelectProps = useTypeSelect(state);

  return (
    <OverlayAnimatePresence visible={isOpen} AnimatePresence={AnimatePresence}>
      <StyledMenu {...menuProps} {...typeSelectProps} ref={ref}>
        {[...state.collection].map((item) => (
          <MenuItem
            StyledMenuItem={StyledMenuItem}
            key={item.key}
            item={item}
            state={state}
            onAction={props.onAction}
            onClose={props.onClose}
          />
        ))}
      </StyledMenu>
    </OverlayAnimatePresence>
  );
};
