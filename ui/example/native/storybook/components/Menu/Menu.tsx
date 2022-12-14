import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Menu, Text, Button, ButtonText, Center } from '@gluestack/ui';
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
        <Button
          ref={targetRef}
          onPress={() => setShowMenu(true)}
          style={{
            width: 10,
            height: 10,
            backgroundColor: 'red',
            marginTop: 100,
          }}
        ></Button>
        {/* </Center> */}
        <Menu
          isOpen={showMenu}
          onClose={() => {
            console.log('hello here 1111');
            setShowMenu(false);
          }}
          triggerRef={targetRef}
        >
          <Menu.Backdrop />
          <Menu.Content maxH="212">
            <Text>hello</Text>
            {/* <Menu.CloseButton />
            <Menu.Header>Return Policy</Menu.Header>
            <Menu.Body>
              <Text>
                Create a 'Return Request' under “My Orders” section of
                App/Website. Follow the screens that come up after tapping on
                the 'Return’ button. Please make a note of the Return ID that we
                generate at the end of the process. Keep the item ready for pick
                up or ship it to us basis on the return mode.
              </Text>
            </Menu.Body>
            <Menu.Footer>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  // setMenuVisible(false);
                }}
              >
                Cancel
              </Button>
            </Menu.Footer> */}
          </Menu.Content>
        </Menu>
      </Wrapper>
    </>
  );
};
