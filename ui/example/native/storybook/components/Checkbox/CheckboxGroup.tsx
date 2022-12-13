import React from 'react';
import Wrapper from '../Wrapper';
import { Checkbox } from '@gluestack/ui';

export const CheckboxGroup = () => {
  const [values, setValues] = React.useState([]);

  return (
    <Wrapper>
      <Checkbox.Group value={values} onChange={setValues}>
        <Checkbox
          value="Lable 1"
          accessibilityLabel="Checkbox"
          onChange={(isSelected: boolean) => console.log(isSelected, '###')}
          sx={{
            style: {
              marginTop: 40,
            },
          }}
        >
          <Checkbox.Indicator>
            <Checkbox.Icon
              sx={{
                state: {
                  checked: {
                    style: {
                      bg: '$red.500',
                    },
                  },
                },
              }}
            />
          </Checkbox.Indicator>
          <Checkbox.Label>Label 1</Checkbox.Label>
        </Checkbox>
        <Checkbox
          value="Lable 2"
          accessibilityLabel="Checkbox"
          onChange={(isSelected: boolean) => console.log(isSelected, '###')}
          sx={{
            style: {
              marginTop: 40,
            },
          }}
        >
          <Checkbox.Indicator>
            <Checkbox.Icon
              sx={{
                state: {
                  checked: {
                    style: {
                      bg: '$red.500',
                    },
                  },
                },
              }}
            />
          </Checkbox.Indicator>
          <Checkbox.Label>Label 2</Checkbox.Label>
        </Checkbox>
      </Checkbox.Group>
    </Wrapper>
  );
};
