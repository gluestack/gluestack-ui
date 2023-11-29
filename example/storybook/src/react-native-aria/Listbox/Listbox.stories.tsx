import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Wrapper } from "../Wrapper";
import { ListBox } from "./index";
import { Item } from "@react-stately/collections";

export const Example = () => {
  return (
    <Wrapper>
      <ListBox
        label="Choose an option"
        selectionMode="multiple"
        defaultSelectedKeys={["one"]}
        shouldFocusWrap
      >
        <Item key="one">One</Item>
        <Item key="two">Two</Item>
        <Item key="three">Three</Item>
      </ListBox>
    </Wrapper>
  );
};

storiesOf("Listbox", module).add("Basic", Example);
