import React, { useRef } from 'react';
import { Section, Item } from 'react-stately';
import type { Node } from '@react-types/shared';
import { TreeState, useMenuTriggerState, useTreeState } from 'react-stately';
import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';
import {
  useOverlayPosition,
  OverlayContainer,
} from '../../../../.gluestack/react-native-aria/packages/overlays/src';
import {
  useMenu,
  // useMenuItem,
  useMenuSection,
  useMenuTrigger,
} from '@react-aria/menu';
import { useMenuItem } from '@react-native-aria/menu';
import { useSeparator } from '../../../../.gluestack/react-native-aria/packages/separator/src';
import { useButton } from '../../../../.gluestack/react-native-aria/packages/button/src';
import Wrapper from '../../Wrapper';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '../../../../.gluestack/react-native-aria/packages/focus/src';
import { Pressable, Text } from 'react-native';
import {
  Button as GlueButton,
  Box,
  Popover as GluePopover,
} from '../../../ui-components';
import { Overlay as GlueOverlay } from '@gluestack-ui/overlay';

function Popover(props: any) {
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
    // <GlueOverlay
    //   {...underlayProps}
    //   {...popoverProps}
    //   isOpen={state.isOpen}
    //   onRequestClose={state.close}
    //   isKeyboardDismissable
    //   // placement="left"
    //   useRNModal={true}
    //   unmountOnExit
    // >
    <Overlay>
      <Box {...underlayProps} />
      <Box {...popoverProps} ref={ref}>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </Box>
    </Overlay>
    // {/* </GlueOverlay> */}
  );
}

const Button = React.forwardRef((props: any, ref: any) => {
  let { buttonProps, isPressed } = useButton(props, ref);
  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <GlueButton
      // @ts-ignore
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      style={{ color: 'white', padding: 8, background: 'blue' }}
    >
      <GlueButton.Text>{props.children}</GlueButton.Text>
    </GlueButton>
  );
});

function MenuButton(props: any) {
  // Create state based on the incoming props
  let state = useMenuTriggerState(props);

  // Get props for the menu trigger and menu elements
  let ref = React.useRef();
  let { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref);
  console.log(state, 'helloo');
  return (
    <Box>
      <Button {...menuTriggerProps} isPressed={state.isOpen} ref={ref}>
        {props.label}
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
        // <GluePopover
        //   isOpen={state.isOpen}
        //   onRequestClose={state.close}
        //   finalFocusRef={ref}
        //   placement="bottom"
        //   trigger={() => {
        //     return <></>;
        //   }}
        // >
        //   <Menu
        //     {...menuProps}
        //     {...props}
        //     autoFocus={state.focusStrategy || true}
        //     onClose={() => state.close()}
        //   />
        // </GluePopover>
      )}
    </Box>
  );
}

function Menu<T extends object>(props: any) {
  // Create state based on the incoming props
  let state = useTreeState(props);

  // Get props for the menu element
  let ref = useRef();
  let { menuProps } = useMenu(props, state, ref);
  return (
    <ul {...menuProps} ref={ref} style={{ padding: 4, minWidth: 200 }}>
      {[...state.collection].map((item) => (
        <MenuSection
          key={item.key}
          section={item}
          state={state}
          onAction={props.onAction}
          onClose={props.onClose}
        />
      ))}
    </ul>
  );
}

interface MenuSectionProps<T> {
  section: Node<T>;
  state: TreeState<T>;
  onAction: (key: React.Key) => void;
  onClose: () => void;
}

function MenuSection<T>({
  section,
  state,
  onAction,
  onClose,
}: MenuSectionProps<T>) {
  let { itemProps, groupProps } = useMenuSection({
    'heading': section.rendered,
    'aria-label': section['aria-label'],
  });

  let { separatorProps } = useSeparator({
    elementType: 'li',
  });

  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <div {...separatorProps} style={{ border: '1px solid black' }} />
      )}
      <div {...itemProps}>
        <ul {...groupProps}>
          {[...section.childNodes].map((node) => (
            <MenuItem
              key={node.key}
              item={node}
              state={state}
              onAction={onAction}
              onClose={onClose}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

interface MenuItemProps<T> {
  item: Node<T>;
  state: TreeState<T>;
  onAction: (key: React.Key) => void;
  onClose: () => void;
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
    <li
      style={{
        listStyle: 'none',
        // outline: isFocused ? '2px solid blue' : 'none',
      }}
      {...menuItemProps}
      ref={ref}
    >
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
          {/* <Item key="item1">Item1</Item>
          <Item key="item2">Item2</Item>
          <Item key="edit">Edit…</Item>
          <Item key="duplicate">Duplicate</Item> */}
          <Section>
            <Item key="edit">Edit…</Item>
            <Item key="duplicate">Duplicate</Item>
          </Section>
          <Section>
            <Item key="move">Move…</Item>
            <Item key="rename">Rename…</Item>
          </Section>
          <Section>
            <Item key="archive">Archive</Item>
            <Item key="delete">Delete…</Item>
          </Section>
        </MenuButton>
        <Pressable>
          <Text>Button2</Text>
        </Pressable>
        <Pressable>
          <Text>Button2</Text>
        </Pressable>{' '}
        <Pressable>
          <Text>Button2</Text>
        </Pressable>{' '}
        <Pressable>
          <Text>Button2</Text>
        </Pressable>{' '}
        <Pressable>
          <Text>Button2</Text>
        </Pressable>{' '}
        <Pressable>
          <Text>Button2</Text>
        </Pressable>
      </Wrapper>
    </>
  );
};
