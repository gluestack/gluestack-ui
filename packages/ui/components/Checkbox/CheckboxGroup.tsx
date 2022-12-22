import React from 'react';
import { Checkbox, CheckIcon, Text, Center } from '@gluestack/ui';

export const CheckboxGroup = ({
  size,
  isInvalid,
  isDisabled,
  isReadOnly,
  ...props
}) => {
  const [values, setValues] = React.useState([]);

  return (
    <Center>
      <Text>{`(Selected: ${values.length})`}</Text>
      <Checkbox.Group
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        value={values}
        onChange={setValues}
        {...props}
      >
        <Checkbox
          size={size}
          isInvalid={isInvalid}
          isIndeterminate
          value="Label 1"
          aria-label="Label 1"
          accessibilityLabel="Checkbox"
          onChange={(isSelected: boolean) =>
            // eslint-disable-next-line no-console
            console.log(isSelected, '###')
          }
        >
          {/* <div> */}
          <Checkbox.Indicator>
            <Checkbox.Icon>
              <CheckIcon />
            </Checkbox.Icon>
          </Checkbox.Indicator>
          <Checkbox.Label>Label 1</Checkbox.Label>
          {/* </div> */}
        </Checkbox>
        <Checkbox
          isInvalid={isInvalid}
          size={size}
          aria-label="Label 2"
          value="Label 2"
          accessibilityLabel="Checkbox"
          onChange={(isSelected: boolean) =>
            // eslint-disable-next-line no-console
            console.log(isSelected, '###')
          }
        >
          <Checkbox.Indicator>
            <Checkbox.Icon>
              <CheckIcon />
            </Checkbox.Icon>
          </Checkbox.Indicator>
          <Checkbox.Label>Label 2</Checkbox.Label>
        </Checkbox>
      </Checkbox.Group>
    </Center>
  );
};
