import React from 'react';
import Wrapper from '../../Wrapper';
import { Button, Menu, HamburgerIcon } from '../../../ui-components';

export const MenuStory = ({ placement }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Wrapper>
        <Menu
          isOpen={isOpen}
          onClose={handleClose}
          onOpen={handleOpen}
          placement={placement}
          // eslint-disable-next-line react/no-unstable-nested-components
          trigger={({ ...triggerProps }) => {
            return (
              <Button {...triggerProps}>
                <Button.Text>Menu</Button.Text>
              </Button>
            );
          }}
        >
          <Menu.Backdrop />
          <Menu.Item key="Item1">
            <Menu.ItemLabel>Item1</Menu.ItemLabel>
          </Menu.Item>
          <Menu.Item key="Roboto">
            <Menu.ItemLabel>Roboto</Menu.ItemLabel>
          </Menu.Item>
          <Menu.Item key="Poppins">
            <Menu.ItemLabel>Poppins</Menu.ItemLabel>
          </Menu.Item>
        </Menu>
      </Wrapper>
    </>
  );
};

export { Menu, Button, HamburgerIcon };
