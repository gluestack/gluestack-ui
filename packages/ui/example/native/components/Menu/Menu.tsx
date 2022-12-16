import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
// import {
//   Menu,
//   Text,
//   Button,
//   ButtonText,
//   Center,
//   Pressable,
//   Divider,
//   CheckIcon,
// } from '@gluestack/ui';
import Wrapper from '../Wrapper';
interface MenuProps {
  onPress: () => void;
  text: string;
}

export const MenuComponent = (props: any) => {
  // return <View><Text>Hello</Text></View>
  const [showMenu, setShowMenu] = React.useState(false);
  // const [size, setSize] = React.useState('md');
  const targetRef = React.useRef(null);
  // const handleSizeClick = (newSize: any) => {
  //   setSize(newSize);
  //   setMenuVisible(!MenuVisible);
  // };

  return (
    <>
      <Wrapper>
        {/* <Center> */}
        {/* <Button
          ref={targetRef}
          onPress={() => setShowMenu(true)}
          sx={{
            style: {
              backgroundColor: '$red.100',
              alignSelf: 'flex-start',
            },
          }}
        >
          Trigger me
        </Button> */}
        {/* </Center> */}
        {/* <Menu
          placement="bottom"
          isOpen={showMenu}
          onClose={() => {
            setShowMenu(false);
          }}
          triggerRef={targetRef}
        >
          <Menu.Backdrop />
          {/* <Menu.Content maxH="212"> */}
        {/* <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
          <Menu.Item>Item 3</Menu.Item>
          <Menu.Item>Item 4</Menu.Item> */}
        {/* </Menu.Content> */}
        {/* </Menu> */}

        {/* <Menu
          placement="bottom"
          isOpen={showMenu}
          onClose={() => {
            setShowMenu(false);
          }}
          triggerRef={targetRef}
        >
          <Menu.Backdrop />
          <Menu.Group>
            <Menu.GroupTitle>Group 1</Menu.GroupTitle>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
            <Menu.Item>Item 4</Menu.Item>
          </Menu.Group>
          <Divider variant="horizontal" />
          <Menu.Group>
            <Menu.GroupTitle>Group 1</Menu.GroupTitle>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
            <Menu.Item>Item 4</Menu.Item>
          </Menu.Group>
        </Menu> */}
        {/* 
        <Menu
          placement="bottom"
          isOpen={showMenu}
          onClose={() => {
            setShowMenu(false);
          }}
          triggerRef={targetRef}
        >
          <Menu.Backdrop />
          <Menu.OptionsGroup type="checkbox">
            <Menu.GroupTitle>Group 1</Menu.GroupTitle>
            <Menu.ItemOption>
              <Menu.ItemOption.Indicator>
                <CheckIcon />
              </Menu.ItemOption.Indicator>
              <Menu.ItemOption.Label>Item 1</Menu.ItemOption.Label>
            </Menu.ItemOption>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
            <Menu.Item>Item 4</Menu.Item>
          </Menu.OptionsGroup>
        </Menu> */}
      </Wrapper>
    </>
  );
};
