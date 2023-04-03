/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useRef } from 'react';
import { useMenuTriggerState, useTreeState } from 'react-stately';
import { useMenu, useMenuItem, useMenuTrigger } from '@react-aria/menu';
import { Item } from 'react-stately';
import { useButton } from '@react-aria/button';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';
import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';
import Wrapper from '../../Wrapper';
import { Pressable, Text } from 'react-native';

export function Popover(props: any) {
  let ref = React.useRef<HTMLDivElement>(null);
  let { state, children } = props;

  let { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef: ref,
    },
    state
  );

  return (
    <Overlay>
      <div {...underlayProps} className="fixed inset-0" />
      <div
        {...popoverProps}
        ref={ref}
        className="z-10 shadow-lg border border-gray-300 bg-white rounded-md mt-2"
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}
const Button = React.forwardRef((props: any, ref: any) => {
  let { buttonProps, isPressed } = useButton(props, ref);
  let { focusProps, isFocusVisible } = useFocusRing();

  let bg = 'bg-blue-500';
  if (props.isDisabled) {
    bg = 'bg-gray-400';
  } else if (isPressed || props.isPressed) {
    bg = 'bg-blue-600';
  }

  let focus = isFocusVisible ? 'ring ring-offset-2 ring-blue-400' : '';

  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      className={`${focus} text-white text-sm font-semibold py-2 px-4 rounded cursor-default focus:outline-none transition ${bg}`}
    >
      {props.children}
    </button>
  );
});

function MenuButton(props: any) {
  let state = useMenuTriggerState(props);

  let ref = React.useRef();
  let { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);

  return (
    <div>
      <Button {...menuTriggerProps} isPressed={state.isOpen} ref={ref}>
        {props.label}
      </Button>
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement="bottom start">
          <Menu
            {...menuProps}
            {...props}
            autoFocus={state.focusStrategy || true}
            onClose={() => state.close()}
          />
        </Popover>
      )}
    </div>
  );
}

function Menu(props: any) {
  // Create state based on the incoming props
  let state = useTreeState(props);

  // Get props for the menu element
  let ref = useRef();
  let { menuProps } = useMenu(props, state, ref);

  return (
    <ul {...menuProps} ref={ref} style={{ padding: '4px', minWidth: '200px' }}>
      {[...state.collection].map((item) => (
        <MenuItem
          key={item.key}
          item={item}
          state={state}
          onAction={props.onAction}
          onClose={props.onClose}
        />
      ))}
    </ul>
  );
}

function MenuItem<T>({ item, state, onAction, onClose }: MenuItemProps<T>) {
  // Get props for the menu item element
  let ref = React.useRef();
  let { menuItemProps } = useMenuItem(
    {
      key: item.key,
      onAction,
      onClose,
    },
    state,
    ref
  );

  // Handle focus events so we can apply highlighted
  // style to the focused menu item
  let isFocused = state.selectionManager.focusedKey === item.key;

  return (
    <li {...menuItemProps} ref={ref}>
      {item.rendered}
    </li>
  );
}

export const MenuStory = ({ placement }: any) => {
  return (
    <>
      <Wrapper>
        <Pressable>
          <Text>Button1</Text>
        </Pressable>
        <MenuButton label="Actions" onAction={(key) => alert(key)}>
          <Item key="item1">Item1</Item>
          <Item key="item2">Item2</Item>
          <Item key="edit">Edit…</Item>
          <Item key="duplicate">Duplicate</Item>
        </MenuButton>
        <Pressable>
          <Text style={{ color: 'lightgray' }}>Button2</Text>
        </Pressable>
        <Pressable>
          <Text style={{ color: 'lightgray' }}>Button2</Text>
        </Pressable>
        <Pressable>
          <Text style={{ color: 'lightgray' }}>Button2</Text>
        </Pressable>
        <Pressable>
          <Text style={{ color: 'lightgray' }}>Button2</Text>
        </Pressable>
        <Pressable>
          <Text style={{ color: 'lightgray' }}>Button2</Text>
        </Pressable>
        <Pressable>
          <Text style={{ color: 'lightgray' }}>Button2</Text>
        </Pressable>
      </Wrapper>
    </>
  );
};
