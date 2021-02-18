import React from "react";
import { storiesOf } from "@storybook/react-native";
import { MenuButton } from "./index";
import { Item } from "@react-stately/collections";
import { View } from "react-native";
import { Wrapper } from "../Wrapper";

const MenuExample = () => {
  return (
    <View style={{ marginTop: 100 }}>
      <MenuButton label="Actions" onAction={console.log}>
        <Item key="copy">Copy</Item>
        <Item key="cut">Cut</Item>
        <Item key="paste">Paste</Item>
      </MenuButton>
    </View>
  );
};

const Example = () => {
  return (
    <Wrapper>
      <MenuExample />
    </Wrapper>
  );
};

storiesOf("Menu", module).add("Menu", Example);
