import React, { useRef } from 'react';
import { Section, Item } from 'react-stately';
import { useMenuTriggerState, useTreeState } from 'react-stately';
import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';
import {
  useOverlayPosition,
  OverlayContainer,
} from '../../../../.gluestack/react-native-aria/packages/overlays/src';
import // useMenu,
// useMenuItem,
// useMenuSection,
// useMenuTrigger,
'@react-aria/menu';
import {
  useMenu,
  useMenuItem,
  useMenuTrigger,
  useMenuSection,
} from '@react-native-aria/menu';
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
import { LI, UL } from '@expo/html-elements';

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
    // <GlueOverlay>{children}</GlueOverlay>
    <Overlay>
      <Box {...underlayProps} style={{ position: 'fixed' }} />
      <Box
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
      </Box>
    </Overlay>
  );
}

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

function MenuButton(props: any) {
  // Create state based on the incoming props
  let state = useMenuTriggerState(props);

  // Get props for the menu trigger and menu elements
  let ref = React.useRef();
  let { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref);
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
      )}
    </Box>
  );
}

function Menu(props: any) {
  let state = useTreeState(props);
  let ref = useRef();
  let { menuProps } = useMenu(props, state, ref);
  return (
    <UL {...menuProps} ref={ref} style={{ padding: 4, minWidth: 200 }}>
      {[...state.collection].map((item) => (
        <MenuSection
          key={item.key}
          section={item}
          state={state}
          onAction={props.onAction}
          onClose={props.onClose}
        />
      ))}
    </UL>
  );
}

function MenuSection<T>({ section, state, onAction, onClose }: any) {
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
        <Box {...separatorProps} style={{ border: '1px solid black' }} />
      )}
      <Box {...itemProps}>
        <UL {...groupProps}>
          {[...section.childNodes].map((node) => (
            <MenuItem
              key={node.key}
              item={node}
              state={state}
              onAction={onAction}
              onClose={onClose}
            />
          ))}
        </UL>
      </Box>
    </>
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
    <LI
      style={{
        listStyle: 'none',
        // outline: isFocused ? '2px solid blue' : 'none',
      }}
      {...menuItemProps}
      ref={ref}
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
        <MenuButton
          label="Actions"
          onAction={(key) => console.log(key, 'hello')}
        >
          <Section>
            <Item key="edit">
              <Text>Edit…</Text>
            </Item>
            <Item key="duplicate">
              <Text>Duplicate</Text>
            </Item>
          </Section>
          <Section>
            <Item key="move">
              <Text>Move…</Text>
            </Item>
            <Item key="rename">
              <Text>Rename…</Text>
            </Item>
          </Section>
          <Section>
            <Item key="archive">
              <Text>Archive</Text>
            </Item>
            <Item key="delete">
              <Text>Delete…</Text>
            </Item>
          </Section>
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
