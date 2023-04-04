/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useRef } from 'react';
import { useMenuTriggerState, useTreeState } from 'react-stately';
import { useMenu, useMenuItem, useMenuTrigger } from '@react-native-aria/menu';
import { Item } from 'react-stately';
import { useButton } from '@react-native-aria/button';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-native-aria/focus';
import Wrapper from '../../Wrapper';
import { Pressable, Text } from 'react-native';
import { Box, Button as GlueButton } from '../../../ui-components';
import { Popover } from './MenuPopover/Popover';
import { UL, LI } from '@expo/html-elements';

const Button = React.forwardRef((props: any, ref: any) => {
  let { buttonProps, isPressed } = useButton(props, ref);
  let { focusProps, isFocusVisible } = useFocusRing();

  let focus = isFocusVisible ? 'ring ring-offset-2 ring-blue-400' : '';

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
  const state = useMenuTriggerState(props);
  const triggerRef = React.useRef(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, triggerRef);
  return (
    <Box>
      <Button {...menuTriggerProps} ref={triggerRef}>
        Hello
      </Button>
      <Popover placement="bottom start" triggerRef={triggerRef} state={state}>
        <Menu
          {...menuProps}
          {...props}
          autoFocus={state.focusStrategy || true}
          onClose={() => state.close()}
        />
      </Popover>
    </Box>
  );
}

function Menu(props: any) {
  // Create state based on the incoming props
  const state = useTreeState(props);

  // Get props for the menu element
  const ref = useRef(null);
  const { menuProps } = useMenu(props, state, ref);

  return (
    <UL {...menuProps} ref={ref} style={{ padding: 4, minWidth: 200 }}>
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
  const ref = React.useRef(null);
  const { menuItemProps } = useMenuItem(
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
  const isFocused = state.selectionManager.focusedKey === item.key;
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
