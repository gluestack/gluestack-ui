import {
  Button as GlueButton,
  Box,
  Popover as GluePopover,
} from '../../../ui-components';
import { useButton } from '@react-native-aria/button';
// import { DismissButton, Overlay, usePopover } from '@react-aria/overlays';
import React, { useRef } from 'react';
import { Section, Item } from 'react-stately';
import type { Node } from '@react-types/shared';
import type { AriaMenuProps, MenuTriggerProps } from '@react-types/menu';
import { TreeState, useMenuTriggerState, useTreeState } from 'react-stately';
import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';
import {
  useMenu,
  useMenuItem,
  useMenuSection,
  useMenuTrigger,
} from '@react-aria/menu';
import { useSeparator } from '@react-aria/separator';
import Wrapper from '../../Wrapper';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';
import { Pressable, Text } from 'react-native';
import { LI, UL } from '@expo/html-elements';

const Button = React.forwardRef((props: any, ref: any) => {
  let { buttonProps, isPressed } = useButton(props, ref);
  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <GlueButton
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      style={{ color: 'white', padding: 8, background: 'blue' }}
    >
      <GlueButton.Text>{props.children}</GlueButton.Text>
    </GlueButton>
  );
});

function Popover(props: any) {
  let ref = React.useRef(null);
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
      <div {...underlayProps} style={{ position: 'fixed' }} />
      <div
        {...popoverProps}
        ref={ref}
        style={{
          zIndex: 10,
          borderWidth: 1,
          borderColor: 'black',
          borderStyle: 'solid',
          backgroundColor: 'white',
        }}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}

function Menu(props: any) {
  let state = useTreeState(props);
  let ref = useRef();
  let { menuProps } = useMenu(props, state, ref);

  return (
    <Box
      as={'ul'}
      {...menuProps}
      ref={ref}
      style={{ padding: 4, minWidth: 200 }}
    >
      {[...state.collection].map((item) => (
        <MenuItem
          key={item.key}
          item={item}
          state={state}
          onAction={props.onAction}
          onClose={props.onClose}
        />
      ))}
    </Box>
  );
}

function MenuItem({ item, state, onAction, onClose }: any) {
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

  let isFocused = state.selectionManager.focusedKey === item.key;

  return (
    <Box as={'li'} style={{ listStyle: 'none' }} {...menuItemProps} ref={ref}>
      {item.rendered}
    </Box>
  );
}

const MenuButton = (props: any) => {
  let state = useMenuTriggerState(props);
  let ref = React.useRef();
  let { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);
  return (
    <Box>
      <Button {...menuTriggerProps} isPressed={state.isOpen} ref={ref}>
        <Text>{props.label}</Text>
      </Button>
      {state.isOpen && (
        <Popover state={state} triggerRef={ref}>
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
};

export const MenuStory = ({ placement }: any) => {
  return (
    <>
      <Wrapper>
        <Pressable>
          <Text>Button1</Text>
        </Pressable>
        <MenuButton label="Actions" onAction={(key) => alert(key)}>
          <Item key="edit">
            <Text>Edit…</Text>
          </Item>
          <Item key="duplicate">
            <Text>Duplicate</Text>
          </Item>
          <Item key="move">
            <Text>Move…</Text>
          </Item>
          <Item key="rename">
            <Text>Rename…</Text>
          </Item>
          <Item key="archive">
            <Text>Archive</Text>
          </Item>
          <Item key="delete">
            <Text>Delete…</Text>
          </Item>
        </MenuButton>
        <Pressable>
          <Text>Button2</Text>
        </Pressable>
        <Pressable>
          <Text>Button2</Text>
        </Pressable>
        <Pressable>
          <Text>Button2</Text>
        </Pressable>
        <Pressable>
          <Text>Button2</Text>
        </Pressable>
        <Pressable>
          <Text>Button2</Text>
        </Pressable>
        <Pressable>
          <Text>Button2</Text>
        </Pressable>
      </Wrapper>
    </>
  );
};
