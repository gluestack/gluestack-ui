import React from 'react';
import { Text, View, Pressable } from 'react-native';

import Root from './src_old_copy_only_mdx/components/Popover/styled-component/Root';
import Arrow from './src_old_copy_only_mdx/components/Popover/styled-component/Arrow';
import Content from './src_old_copy_only_mdx/components/Popover/styled-component/Content';
import Header from './src_old_copy_only_mdx/components/Popover/styled-component/Header';
import Footer from './src_old_copy_only_mdx/components/Popover/styled-component/Footer';
import Body from './src_old_copy_only_mdx/components/Popover/styled-component/Body';
import Backdrop from './src_old_copy_only_mdx/components/Popover/styled-component/Backdrop';
import CloseButton from './src_old_copy_only_mdx/components/Popover/styled-component/CloseButton';

import { createPopover } from '@universa11y/popover';
import { Wrapper } from './src_old_copy_only_mdx/components/Wrapper';

const PopoverTemp = createPopover({
  Root,
  Arrow,
  Content,
  Header,
  Footer,
  Body,
  Backdrop,
  CloseButton,
});

import {
  Root as RootMenu,
  Backdrop as BackdropMenu,
  Content as ContentMenu,
  Group,
  GroupTitle,
  MenuItem,
  // MenuItemOption,
  // MenuItemOptionIndicator,
  // MenuItemOptionLabel,
  // MenuOptionsGroup,
  // MenuTrigger,
} from './src_old_copy_only_mdx/components/Menu/styled-component';

import { createMenu } from '@universa11y/menu';

export const MenuTemp: any = createMenu({
  Root: RootMenu,
  Backdrop: BackdropMenu,
  Content: ContentMenu,
  Group,
  GroupTitle,
  MenuItem,
  // MenuItemOption,
  // MenuItemOptionIndicator,
  // MenuItemOptionLabel,
  // MenuOptionsGroup,
  // MenuTrigger,
});

export const Menu = () => {
  return (
    <Wrapper>
      <MenuTemp
        placement={'bottom'}
        trigger={(triggerProps: any) => {
          return (
            <Pressable {...triggerProps}>
              <Text>Menu</Text>
            </Pressable>
          );
        }}
      >
        <MenuTemp.Content>
          <MenuTemp.Item>
            <Text style={{ padding: 12 }}>Arial</Text>
          </MenuTemp.Item>
          <MenuTemp.Item>
            <Text style={{ padding: 12 }}>Nunito Sans</Text>
          </MenuTemp.Item>
          <MenuTemp.Item>
            <Text style={{ padding: 12 }}>Roboto</Text>
          </MenuTemp.Item>
          <MenuTemp.Item>
            <Text style={{ padding: 12 }}>Poppins</Text>
          </MenuTemp.Item>
          <MenuTemp.Item>
            <Text style={{ padding: 12 }}>SF Pro</Text>
          </MenuTemp.Item>
          <MenuTemp.Item>
            <Text style={{ padding: 12 }}>Helvetica</Text>
          </MenuTemp.Item>
          <MenuTemp.Item isDisabled>
            <Text style={{ padding: 12 }}>Sofia</Text>
          </MenuTemp.Item>
          <MenuTemp.Item>
            <Text style={{ padding: 12 }}>Cookie</Text>
          </MenuTemp.Item>
        </MenuTemp.Content>
        <MenuTemp.Backdrop />
      </MenuTemp>
    </Wrapper>
  );
};

export const Popover = () => {
  return (
    <Wrapper>
      <View style={{ marginTop: 100 }}>
        <PopoverTemp
          placement={'left top'}
          trigger={(triggerProps: any) => {
            return (
              <Pressable {...triggerProps}>
                <Text style={{ padding: 10, backgroundColor: 'red' }}>
                  Popover
                </Text>
              </Pressable>
            );
          }}
        >
          <PopoverTemp.Content>
            {/* <PopoverTemp.Arrow />
          <PopoverTemp.CloseButton></PopoverTemp.CloseButton>
          {/* <PopoverTemp.Header>
            <Text>Delete Customer</Text>
          </PopoverTemp.Header> */}
            <PopoverTemp.Body>
              <Text>This will</Text>
            </PopoverTemp.Body>
            {/* <PopoverTemp.Footer></PopoverTemp.Footer> */}
          </PopoverTemp.Content>
        </PopoverTemp>
      </View>
    </Wrapper>
  );
};
export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.tsx to start working on your app!</Text>
  //   </View>
  // );

  return (
    <>
      <Popover />
      <Menu />
    </>
  );
}
