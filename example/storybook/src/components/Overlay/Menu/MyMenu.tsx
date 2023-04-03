import React, { useRef } from 'react';
import { Section, Item } from 'react-stately';
import type { Node } from '@react-types/shared';
import type { AriaMenuProps, MenuTriggerProps } from '@react-types/menu';
import { TreeState, useMenuTriggerState, useTreeState } from 'react-stately';
import type { OverlayTriggerState } from 'react-stately';
import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';
import type { AriaPopoverProps } from '@react-aria/overlays';
import type { AriaButtonProps } from '@react-types/button';
import {
  useMenu,
  useMenuItem,
  useMenuSection,
  useMenuTrigger,
} from '@react-aria/menu';
import { useSeparator } from '@react-aria/separator';
import { useButton } from '@react-aria/button';
import Wrapper from '../../Wrapper';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';
import { Pressable, Text } from 'react-native';

interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: React.ReactNode;
  state: OverlayTriggerState;
}

interface ButtonProps extends AriaButtonProps {
  isPressed: boolean;
}
interface MenuButtonProps<T extends object>
  extends AriaMenuProps<T>,
    MenuTriggerProps {
  label: string;
}

function Popover(props: PopoverProps) {
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

const Button = React.forwardRef((props: any, ref: any) => {
  let { buttonProps, isPressed } = useButton(props, ref);
  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <button
      // @ts-ignore
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      style={{ color: 'white', padding: 8, background: 'blue' }}
    >
      {props.children}
    </button>
  );
});

function MenuButton<T extends object>(props: MenuButtonProps<T>) {
  // Create state based on the incoming props
  let state = useMenuTriggerState(props);

  // Get props for the menu trigger and menu elements
  let ref = React.useRef();
  let { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref);

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

interface MenuProps<T extends object> extends AriaMenuProps<T> {
  onClose: () => void;
}

function Menu<T extends object>(props: MenuProps<T>) {
  // Create state based on the incoming props
  let state = useTreeState(props);

  // Get props for the menu element
  let ref = useRef();
  let { menuProps } = useMenu(props, state, ref);

  return (
    <ul {...menuProps} ref={ref} style={{ padding: 4, minWidth: 200 }}>
      {[...state.collection].map((item) => (
        // <MenuSection
        //   key={item.key}
        //   section={item}
        //   state={state}
        //   onAction={props.onAction}
        //   onClose={props.onClose}
        // />
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
    <li style={{ listStyle: 'none' }} {...menuItemProps} ref={ref}>
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
          {/* <Section>
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
          </Section> */}
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
