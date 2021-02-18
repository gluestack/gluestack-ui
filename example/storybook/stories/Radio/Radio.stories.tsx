import React from "react";
import { storiesOf } from "@storybook/react-native";
import { RadioGroup, Radio } from "./index";
import { Wrapper } from "../Wrapper";

const RadioExample = () => {
  return (
    <RadioGroup label="Favorite pet">
      <Radio value="dogs">Dogs</Radio>
      <Radio value="cats">Cats</Radio>
    </RadioGroup>
  );
};

export const Example = () => {
  return (
    <Wrapper>
      <RadioExample />
    </Wrapper>
  );
};

storiesOf("Radio", module).add("Radio group", Example);
