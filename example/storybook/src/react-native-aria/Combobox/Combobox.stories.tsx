import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Wrapper } from "../Wrapper";
import { ComboBox } from "./index";
import { Item } from "@react-stately/collections";

export const Example = () => {
  return (
    <Wrapper>
      <ComboBox label="Favorite Animal">
        <Item key="red panda">Red Panda</Item>
        <Item key="cat">Cat</Item>
        <Item key="dog">Dog</Item>
        <Item key="aardvark">Aardvark</Item>
        <Item key="kangaroo">Kangaroo</Item>
        <Item key="snake">Snake</Item>
      </ComboBox>
    </Wrapper>
  );
};

storiesOf("Combobox", module).add("Basic", () => <Example />);
