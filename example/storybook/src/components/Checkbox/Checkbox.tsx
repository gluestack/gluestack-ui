import { Root, Icon, Indicator, Label, Group } from './styled-component';
import { createCheckbox } from '@universa11y/checkbox';
import React from 'react';

const CheckboxTemp = createCheckbox({
  Root,
  Indicator,
  Icon,
  Label,
  Group,
});

export const Checkbox = () => {
  const [values, setValues] = React.useState([]);
  return (
    <>
      <CheckboxTemp.Group
        isDisabled={false}
        isReadOnly={false}
        value={values}
        onChange={setValues}
      >
        <CheckboxTemp
          size="sm"
          isInvalid={false}
          isIndeterminate
          value="Label 1"
          aria-label="Label 1"
          accessibilityLabel="Checkbox"
          onChange={(isSelected: boolean) =>
            // eslint-disable-next-line no-console
            console.log(isSelected, '###')
          }
        >
          <CheckboxTemp.Indicator>
            <CheckboxTemp.Icon>{/* <CheckIcon /> */}</CheckboxTemp.Icon>
          </CheckboxTemp.Indicator>
          <CheckboxTemp.Label>Label 1</CheckboxTemp.Label>
        </CheckboxTemp>
        <CheckboxTemp
          isInvalid={true}
          size="sm"
          aria-label="Label 2"
          value="Label 2"
          accessibilityLabel="Checkbox"
          onChange={(isSelected: boolean) =>
            // eslint-disable-next-line no-console
            console.log(isSelected, '###')
          }
        >
          <CheckboxTemp.Indicator>
            <CheckboxTemp.Icon>{/* <CheckIcon /> */}</CheckboxTemp.Icon>
          </CheckboxTemp.Indicator>
          <CheckboxTemp.Label>Label 2</CheckboxTemp.Label>
        </CheckboxTemp>
      </CheckboxTemp.Group>
    </>
  );
};
