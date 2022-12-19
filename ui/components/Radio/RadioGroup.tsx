import React from 'react';
/* eslint-disable no-console */
import { Radio } from '@gluestack/ui';
export const RadioGroup = () => {
  const [values, setValues] = React.useState('Label 1');

  return (
    <Radio.Group value={values} onChange={setValues}>
      <Radio
        value="Label 1"
        accessibilityLabel="Radio"
        onChange={(nextValue: boolean) => console.log(nextValue, '###')}
        sx={{
          style: {
            marginTop: 40,
          },
        }}
      >
        <Radio.Indicator>
          <Radio.Icon
            sx={{
              state: {
                checked: {
                  style: {
                    bg: '$red500',
                  },
                },
              },
            }}
          />
        </Radio.Indicator>
        <Radio.Label>Label 1</Radio.Label>
      </Radio>
      <Radio
        value="Label 2"
        accessibilityLabel="Radio"
        onChange={(isSelected: boolean) => console.log(isSelected, '###')}
        sx={{
          style: {
            marginTop: 40,
          },
        }}
      >
        <Radio.Indicator>
          <Radio.Icon
            sx={{
              state: {
                checked: {
                  style: {
                    bg: '$red500',
                  },
                },
              },
            }}
          />
        </Radio.Indicator>
        <Radio.Label>Label 2</Radio.Label>
      </Radio>
    </Radio.Group>
  );
};
