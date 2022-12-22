import { Checkbox } from '@gluestack/ui';
import React from 'react';

export const Example = ({ ...props }) => {
  return (
    <Checkbox
      {...props}
      size={props.size}
      accessibilityLabel="Checkbox"
      onChange={(isSelected: boolean) =>
        // eslint-disable-next-line no-consol
        console.log(isSelected, '###')
      }
      sx={{
        style: {
          marginTop: 40,
        },
      }}
    >
      <Checkbox.Indicator>
        <Checkbox.Icon />
      </Checkbox.Indicator>
      <Checkbox.Label>Label 1</Checkbox.Label>
    </Checkbox>
  );
};
