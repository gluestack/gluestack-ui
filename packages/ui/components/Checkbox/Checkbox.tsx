import { Checkbox } from '@gluestack/ui';
import React from 'react';

export const Example = ({ ...props }) => {
  return (
    <Checkbox
      {...props}
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
  );
};
