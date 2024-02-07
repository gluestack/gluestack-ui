import React from 'react';
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxGroup,
} from '../../components-example/themed/Checkbox';

const CheckboxGroupBasic = ({ ...props }: any) => {
  const [values, setValues] = React.useState(['Label 1']);

  return (
    <CheckboxGroup
      aria-label="Checkbox Group"
      value={values}
      onChange={setValues}
      nativeID="checkbox-group"
    >
      <Checkbox
        size={props.size}
        value="Label 1"
        aria-label="Label 1"
        onChange={(isSelected: boolean) =>
          // eslint-disable-next-line no-console
          console.log(isSelected, '###')
        }
        nativeID="checkbox-1"
      >
        <CheckboxIndicator>
          <CheckboxIcon />
        </CheckboxIndicator>
        <CheckboxLabel>Label 1</CheckboxLabel>
      </Checkbox>
      <Checkbox
        size={props.size}
        value="Label 2"
        aria-label="Label 2"
        onChange={(isSelected: boolean) =>
          // eslint-disable-next-line no-console
          console.log(isSelected, '###')
        }
        nativeID="checkbox-2"
      >
        <CheckboxIndicator>
          <CheckboxIcon />
        </CheckboxIndicator>
        <CheckboxLabel>Label 2</CheckboxLabel>
      </Checkbox>
    </CheckboxGroup>
  );
};

CheckboxGroupBasic.description = 'This is a basic Checkbox component example';

export default CheckboxGroupBasic;

export {
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
};
