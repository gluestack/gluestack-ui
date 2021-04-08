import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Slider } from "./index";
import { Wrapper } from "../Wrapper";

const SliderExample = () => {
  return (
    <Slider
      label="Opacity"
      formatOptions={{ style: "percent" }}
      maxValue={100}
      step={1}
    />
  );
};

export const Example = () => {
  return (
    <Wrapper>
      <SliderExample />
    </Wrapper>
  );
};

storiesOf("Slider", module).add("basic", Example);
