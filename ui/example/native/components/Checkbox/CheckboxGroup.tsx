import React from 'react';
import Wrapper from '../Wrapper';
import { Checkbox, CheckIcon, CheckCircleIcon } from '@gluestack/ui';

export const CheckboxGroup = () => {
  const [values, setValues] = React.useState([]);

  return (
    <Wrapper>
      <Checkbox.Group value={values} onChange={setValues}>
        <Checkbox
          value="Lable 1"
          aria-label="Lable 1"
          accessibilityLabel="Checkbox"
          onChange={(isSelected: boolean) => console.log(isSelected, '###')}
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
          aria-label="Lable 2"
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
    </Wrapper>
  );
};
