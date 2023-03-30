import React from 'react';
import Wrapper from '../../Wrapper';
import { Center } from '../../../ui-components';
import {
  Button,
  HamburgerIcon,
  // Menu,
  Text,
  GlobeIcon,
  PluginIcon,
  ThemeIcon,
  SettingsIcon,
  PlusIcon,
  Box,
  Badge,
  Pressable,
  Avatar,
  Divider,
} from '../../../ui-components';
// import { Item } from 'react-stately';

import { useFocus } from '@react-aria/interactions';
import { useButton } from '@react-aria/button';

import { useMenuTrigger } from '@react-aria/menu';
import { Item, useMenuTriggerState } from 'react-stately';
import { FocusScope } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import { useTreeState } from 'react-stately';
import { useMenu, useMenuItem } from '@react-aria/menu';
import { Overlay } from '@gluestack-ui/overlay';
import { DismissButton, useOverlay } from '@react-aria/overlays';
import { useInteractOutside } from '@react-aria/interactions';

// Reuse the Popover, and Button from your component library. See below for details.
// import { Button, Popover } from 'your-component-library';

function MenuButton<T extends object>(props: any) {
  // Create state based on the incoming props
  let state = useMenuTriggerState(props);

  // Get props for the button and menu elements
  let ref = React.useRef(null);
  let { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref);

  let { buttonProps } = useButton(menuTriggerProps, ref);

  console.log(menuProps, 'props here');

  return (
    <>
      <button {...buttonProps} ref={ref} style={{ height: 30, fontSize: 14 }}>
        {props.label}
        <span aria-hidden="true" style={{ paddingLeft: 5 }}>
          ▼
        </span>
      </button>
      {state.isOpen && (
        <Menu {...props} {...menuProps} autoFocus={state.focusStrategy} />
      )}
    </>
  );
}

function Menu<T extends object>(props: AriaMenuProps<T>) {
  // Create menu state based on the incoming props
  // let state = useTreeState(props);

  let state = useTreeState({ ...props, selectionMode: 'none' });

  // Get props for the menu element
  let ref = React.useRef(null);
  let { menuProps } = useMenu(props, state, ref);

  let overlayRef = React.useRef(null);

  useInteractOutside({
    ref: overlayRef,
    // onInteractOutside: action('onInteractOutside'),
  });

  let { overlayProps } = useOverlay(
    {
      onClose: props.onClose,
      shouldCloseOnBlur: true,
      isOpen: true,
      isDismissable: true,
    },
    overlayRef
  );

  return (
    <FocusScope restoreFocus>
      <div {...overlayProps} ref={overlayRef}>
        <ul
          {...mergeProps(menuProps, props.domProps)}
          ref={ref}
          style={{
            margin: 0,
            padding: 0,
            listStyle: 'none',
            width: 150,
          }}
        >
          {[...state.collection].map((item) => (
            <MenuItem key={item.key} item={item} state={state} />
          ))}
        </ul>
      </div>
    </FocusScope>
  );
}

function MenuItem({ item, state }) {
  // Get props for the menu item element
  let ref = React.useRef(null);
  let { menuItemProps } = useMenuItem(
    {
      key: item.key,
      isDisabled: item.isDisabled,
    },
    state,
    ref
  );

  let [isFocused, setFocused] = React.useState(false);
  let { focusProps } = useFocus({ onFocusChange: setFocused });

  return (
    <li
      {...mergeProps(menuItemProps, focusProps)}
      ref={ref}
      style={{
        background: isFocused ? 'gray' : 'transparent',
        // color: isDisabled ? 'gray' : isFocused ? 'white' : 'black',
        padding: '2px 5px',
        outline: 'none',
        cursor: 'default',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {item.rendered}
      {/* {isSelected && <span aria-hidden="true">✅</span>} */}
    </li>
  );
}

export const MenuStory = ({ placement }: any) => {
  return (
    <>
      <Wrapper>
        <Button>
          <Button.Text>Button</Button.Text>
        </Button>
        {/* <Menu
          placement={placement}
          trigger={(triggerProps: any) => {
            return (
              <Center>
                <Button {...triggerProps}>
                  <Button.Text>
                    <HamburgerIcon />
                  </Button.Text>
                </Button>
              </Center>
            );
          }}
        >

          <Item key="copy">Copy</Item>
          <Item key="cut">Cut</Item>
          <Item key="paste">Paste</Item> */}
        {/* 
          <Menu.Item color="red">hello1</Menu.Item>
          <Menu.Item>hello</Menu.Item>
          <Menu.Item>hello 2</Menu.Item> */}

        {/* <Menu.Item>
            <Text sx={{ px: '$3' }}>Arial</Text>
          </Menu.Item>
          <Menu.Item>
            <Text sx={{ px: '$3' }}>Arial</Text>
          </Menu.Item> */}
        {/* <Menu.Item>
            <Text sx={{ px: '$3' }}>Arial</Text>
          </Menu.Item>
          <Menu.Item>
            <Text sx={{ px: '$3' }}>Nunito Sans</Text>
          </Menu.Item>
          <Menu.Item>
            <Text sx={{ px: '$3' }}>Roboto</Text>
          </Menu.Item>
          <Menu.Item>
            <Text sx={{ px: '$3' }}>Poppins</Text>
          </Menu.Item>
          <Menu.Item>
            <Text sx={{ px: '$3' }}>SF Pro</Text>
          </Menu.Item>
          <Menu.Item>
            <Text sx={{ px: '$3' }}>Helvetica</Text>
          </Menu.Item>
          <Menu.Item isDisabled>
            <Text sx={{ px: '$3' }}>Sofia</Text>
          </Menu.Item>
          <Menu.Item>
            <Text sx={{ px: '$3' }}>Cookie</Text>
          </Menu.Item> */}
        {/* </Menu.Content> */}
        {/* <Menu.Backdrop /> */}
        {/* </Menu> */}

        <MenuButton label="Actions" onAction={alert}>
          <Item key="copy">Copy</Item>
          <Item key="cut">Cut</Item>
          <Item key="paste">Paste</Item>
        </MenuButton>

        <Button>
          <Button.Text>Button</Button.Text>
        </Button>
      </Wrapper>
    </>
  );
};

export {
  Button,
  HamburgerIcon,
  Menu,
  Text,
  Center,
  GlobeIcon,
  PluginIcon,
  ThemeIcon,
  SettingsIcon,
  PlusIcon,
  Box,
  Badge,
  Pressable,
  Avatar,
  Divider,
};
