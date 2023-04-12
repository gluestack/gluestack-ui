/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import Wrapper from '../../Wrapper';
import { Pressable, Text } from 'react-native';
import { Button, Menu } from '../../../ui-components';

export const MenuStory = ({ placement }: any) => {
  return (
    <>
      <Wrapper>
        <Pressable>
          <Text>Button1</Text>
        </Pressable>
        <Menu
          placement={placement}
          trigger={({ ...triggerProps }) => {
            return (
              <Button {...triggerProps}>
                <Button.Text>Menu</Button.Text>
              </Button>
            );
          }}
        >
          <Menu.Item>
            <Menu.ItemLabel>Item1</Menu.ItemLabel>
          </Menu.Item>
          <Menu.Item key="item2">
            <Menu.ItemLabel>Item2</Menu.ItemLabel>
          </Menu.Item>
          <Menu.Item key="item3">
            <Menu.ItemLabel>Item3</Menu.ItemLabel>
          </Menu.Item>
        </Menu>
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
