import React, { useRef } from 'react';
import { useMenuTriggerState, useTreeState } from 'react-stately';
import { useMenu, useMenuTrigger } from '@react-native-aria/menu';
import { useMenuItem } from '@react-native-aria/menu';
import { Item } from 'react-stately';
import { useButton } from '@react-native-aria/button';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-native-aria/focus';
import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';
import Wrapper from '../../Wrapper';
import { Pressable, Text } from 'react-native';
import { Box, Button as GlueButton } from '../../../ui-components';
import { UL, LI } from '@expo/html-elements';

function PopoverNative(props: any) {
  let ref = React.useRef<HTMLDivElement>(null);
  let { state, children } = props;

  // let { popoverProps, underlayProps } = usePopover(
  //   {
  //     ...props,
  //     popoverRef: ref,
  //   },
  //   state
  // );
  return children;
  // return (
  //   <Overlay>
  //     <Box {...underlayProps} style={{ position: 'fixed' }} />
  //     <Box
  //       {...popoverProps}
  //       ref={ref}
  //       style={{
  //         ...popoverProps.style,
  //         zIndex: 10,
  //         borderRadius: 4,
  //         marginTop: 2,
  //       }}
  //     >
  //       <DismissButton onDismiss={state.close} />
  //       {children}
  //       <DismissButton onDismiss={state.close} />
  //     </Box>
  //   </Overlay>
  // );
}
function PopoverWeb(props: any) {
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
  /* eslint-disable @typescript-eslint/no-unused-vars */
  let { buttonProps, isPressed } = useButton(props);
  /* eslint-disable @typescript-eslint/no-unused-vars */
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
        // @ts-ignore
        cursor: 'pointer',
      }}
    >
      <Text style={{ color: 'white' }}>{props.children}</Text>
    </GlueButton>
  );
});

function MenuButton(props: any) {
  let state = useMenuTriggerState(props);

  let ref: any = React.useRef();
  let { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);

  return (
    <Box>
      <Button {...menuTriggerProps} isPressed={state.isOpen} ref={ref}>
        {props.label}
      </Button>
      {state.isOpen && (
        <PopoverWeb state={state} triggerRef={ref} placement={props.placement}>
          <Menu
            {...menuProps}
            {...props}
            autoFocus={state.focusStrategy || true}
            onClose={() => state.close()}
          />
        </PopoverWeb>
      )}
    </Box>
  );
}

function Menu(props: any) {
  // Create state based on the incoming props
  let state = useTreeState(props);

  // Get props for the menu element
  let ref: any = useRef();
  let { menuProps } = useMenu(props, state, ref);

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

function MenuItem({ item, state, onAction, onClose }: any) {
  // Get props for the menu item element
  let ref: any = React.useRef();
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
    <Pressable
      {...menuItemProps}
      ref={ref}
      style={{ backgroundColor: isFocused ? 'red' : 'pink' }}
    >
      <LI>{item.rendered}</LI>
    </Pressable>
  );
}

export const MenuStory = ({ placement }: any) => {
  return (
    <>
      <Wrapper>
        <Pressable>
          <Text>Button1</Text>
        </Pressable>
        <MenuButton
          placement={placement}
          label="Actions"
          onAction={(key: any) => alert(key)}
          onClose={(key: any) => alert(key, 'close')}
        >
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
