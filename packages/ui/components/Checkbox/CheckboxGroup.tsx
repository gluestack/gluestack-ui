import React from 'react';
import { Checkbox, CheckIcon } from '@gluestack/ui';

export const CheckboxGroup = ({ ...props }) => {
  const [values, setValues] = React.useState([]);

  return (
    <Checkbox.Group value={values} onChange={setValues} {...props}>
      <Checkbox
        value="Label 1"
        aria-label="Label 1"
        accessibilityLabel="Checkbox"
        onChange={(isSelected: boolean) =>
          // eslint-disable-next-line no-console
          console.log(isSelected, '###')
        }
        sx={{
          style: {
            marginTop: 40,
          },
        }}
      >
        <Checkbox.Indicator>
          <Checkbox.Icon>
            <CheckIcon
              sx={{
                style: {
                  bg: 'transparent',
                  color: '$white',
                  w: 12,
                  h: 12,
                  borderRadius: 4,
                  zIndex: -1,
                },
              }}
            />
          </Checkbox.Icon>
        </Checkbox.Indicator>
        <Checkbox.Label>Label 1</Checkbox.Label>
      </Checkbox>
      <Checkbox
        aria-label="Label 2"
        value="Label 2"
        accessibilityLabel="Checkbox"
        onChange={(isSelected: boolean) =>
          // eslint-disable-next-line no-console
          console.log(isSelected, '###')
        }
        sx={{
          style: {
            marginTop: 40,
          },
        }}
      >
        <Checkbox.Indicator>
          <Checkbox.Icon>
            <CheckIcon
              sx={{
                style: {
                  bg: 'transparent',
                  color: '$white',
                  w: 12,
                  h: 12,
                  borderRadius: 4,
                  zIndex: -1,
                },
              }}
            />
          </Checkbox.Icon>
        </Checkbox.Indicator>
        <Checkbox.Label>Label 2</Checkbox.Label>
      </Checkbox>
    </Checkbox.Group>
  );
};
