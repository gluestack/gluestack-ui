import React from "react";
import { storiesOf } from "@storybook/react-native";
import { MenuButton } from "./index";
import { Item, Section } from "@react-stately/collections";
import { View } from "react-native";
import { Wrapper } from "../Wrapper";

const MenuExample = () => {
  return (
    <View style={{ marginTop: 100 }}>
      <MenuButton
        label="Actions"
        onAction={console.log}
        selectionMode="multiple"
        closeOnSelect={false}
        onSelectionChange={console.log}
      >
        <Section title="Section 1">
          <Item key="copy">Copy</Item>
          <Item key="cut">Cut</Item>
          <Item key="paste">Paste</Item>
        </Section>
        <Section title="Section 2">
          <Item key="copy 2">Copy</Item>
          <Item key="cut 2">Cut</Item>
          <Item key="paste 2">Paste</Item>
        </Section>
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
