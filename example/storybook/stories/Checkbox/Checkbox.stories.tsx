import React from "react";
import { storiesOf } from "@storybook/react-native";
import { CheckboxGroup } from "./CheckboxGroup";
import { Checkbox } from "./Checkbox";
import { Text } from "react-native";
import { Wrapper } from "../Wrapper";

const CheckboxExample = () => {
  const [state, setCheckbox] = React.useState([]);

  return (
    <CheckboxGroup
      label="Favorite sports"
      value={state}
      onChange={(val: any) => {
        setCheckbox(val);
      }}
    >
      <Checkbox value="soccer">
        <Text>Soccer</Text>
      </Checkbox>
      <Checkbox value="baseball" isSelected>
        <Text>Baseball</Text>
      </Checkbox>
      <Checkbox value="basketball" autoFocus>
        <Text>Basketball</Text>
      </Checkbox>
    </CheckboxGroup>
  );
};

export const Example = () => {
  return (
    <Wrapper>
      <CheckboxExample />
    </Wrapper>
  );
};

storiesOf("Checkbox", module).add("Checkbox group", Example);
