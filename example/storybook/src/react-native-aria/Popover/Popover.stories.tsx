import React from "react";
import { storiesOf } from "@storybook/react-native";
import { PopoverExample } from "./index";
import { Wrapper } from "../Wrapper";

export const Example = () => {
  return (
    <Wrapper>
      <PopoverExample />
    </Wrapper>
  );
};

storiesOf("Popover", module).add("Popover", Example);
