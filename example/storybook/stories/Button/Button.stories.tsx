import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Button } from "./Button";
import { Wrapper } from "../Wrapper";

export const Example = () => {
  return (
    <Wrapper>
      <Button> Button</Button>
    </Wrapper>
  );
};

storiesOf("Button", module).add("Button", Example);
