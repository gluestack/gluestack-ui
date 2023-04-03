/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useRef } from 'react';
import { useMenuTriggerState, useTreeState } from 'react-stately';
import { useMenu, useMenuItem, useMenuTrigger } from '@react-native-aria/menu';
import { Item } from 'react-stately';
import { useButton } from '@react-native-aria/button';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';
import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';
import Wrapper from '../../Wrapper';
import { Pressable, Text } from 'react-native';
import { Box, Button as GlueButton } from '../../../ui-components';
import { UL, LI } from '@expo/html-elements';
import { useMenuItem } from '@react-native-aria/menu';

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
      <Box {...underlayProps} style={{ position: 'fixed' }} />
      <Box
        {...popoverProps}
        ref={ref}
        style={{
          ...popoverProps.style,
          zIndex: 10,
          borderRadius: 4,
          marginTop: 2,
        }}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </Box>
    </Overlay>
  );
}
const Button = React.forwardRef((props: any, ref: any) => {
  let { buttonProps, isPressed } = useButton(props, ref);
  let { focusProps, isFocusVisible } = useFocusRing();

  // let focus = isFocusVisible ? 'ring ring-offset-2 ring-blue-400' : '';

  return (
    <GlueButton
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      style={{
        backgroundColor: props.isDisabled ? 'gray' : 'blue',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 4,
        cursor: 'pointer',
      }}
    >
      <Text style={{ color: 'white' }}>{props.children}</Text>
    </GlueButton>
  );
});

function MenuButton(props: any) {
  let state = useMenuTriggerState(props);

  let ref = React.useRef();
  let { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);

  return (
    <Box>
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
    </Box>
  );
}

function Menu(props: any) {
  // Create state based on the incoming props
  let state = useTreeState(props);

  // Get props for the menu element
  let ref = useRef();
  let { menuProps } = useMenu(props, state, ref);

  return (
    <UL {...menuProps} ref={ref} style={{ padding: '4px', minWidth: '200px' }}>
      {[...state.collection].map((item) => (
        <MenuItem
          key={item.key}
          item={item}
          state={state}
          onAction={props.onAction}
          onClose={props.onClose}
        />
      ))}
    </UL>
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
  console.log('isFocused', menuItemProps);
  return (
    <LI
      {...menuItemProps}
      ref={ref}
      style={{ backgroundColor: isFocused ? 'red' : 'pink' }}
    >
      {item.rendered}
    </LI>
  );
}

export const MenuStory = ({ placement }: any) => {
  return (
    <>
      <Wrapper>
        <Pressable>
          <Text>Button1</Text>
        </Pressable>
        <MenuButton label="Actions">
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
