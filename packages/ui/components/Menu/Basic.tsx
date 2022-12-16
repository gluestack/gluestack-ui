import React from 'react';
import { Menu, Button, Center, HamburgerIcon } from '@gluestack/ui';
import Wrapper from '../Wrapper';
interface MenuProps {
  onPress: () => void;
  text: string;
}

export const MenuComponent = ({ props }: any) => {
  const [showMenu, setShowMenu] = React.useState(false);

  const targetRef = React.useRef(null);

  return (
    <>
      <Wrapper>
        <Center>
          <Button ref={targetRef} onPress={() => setShowMenu(true)}>
            <Button.Text>
              <HamburgerIcon />
            </Button.Text>
          </Button>
        </Center>
        <Menu
          isOpen={showMenu}
          placement="bottom"
          onClose={() => {
            setShowMenu(false);
          }}
          triggerRef={targetRef}
        >
          <Menu.Backdrop />

          <Menu.Content>
            <Menu.Item>Arial</Menu.Item>
            <Menu.Item>Nunito Sans</Menu.Item>
            <Menu.Item>Roboto</Menu.Item>
            <Menu.Item>Poppins</Menu.Item>
            <Menu.Item>SF Pro</Menu.Item>
            <Menu.Item>Helvetica</Menu.Item>
            <Menu.Item isDisabled>Sofia</Menu.Item>
            <Menu.Item>Cookie</Menu.Item>
          </Menu.Content>
        </Menu>
      </Wrapper>
    </>
  );
};
