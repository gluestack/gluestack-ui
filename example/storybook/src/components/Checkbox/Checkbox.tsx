import React from 'react';
import Wrapper from '../Wrapper';

import { createCheckbox } from '@gluestack-ui/checkbox';
import {
  Root,
  Indicator,
  Icon,
  Label,
  Group,
} from '../styled-components/checkbox';
import { Center } from '../Center/Center';
import { Text } from '../Text/Text';
import { CheckIcon } from '../Icons/Icons';

export const Checkbox = createCheckbox({
  Root,
  Indicator,
  Icon,
  Label,
  Group,
});

export const CheckboxExample = ({ ...props }) => {
  const [values, setValues] = React.useState([]);

  return (
    <Wrapper>
      <Center>
        <Text>{`(Selected: ${values.length})`}</Text>
        <Checkbox.Group
          isDisabled={props.isDisabled}
          isReadOnly={props.isReadOnly}
          value={values}
          onChange={setValues}
          {...props}
        >
          <Checkbox
            size={props.size}
            isInvalid={props.isInvalid}
            isIndeterminate
            value="Label 1"
            aria-label="Label 1"
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
            <Checkbox.Label>Label 1</Checkbox.Label>
          </Checkbox>
          <Checkbox
            isInvalid={props.isInvalid}
            size={props.size}
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
    </Wrapper>
  );
};
