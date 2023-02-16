import {
  Root,
  Icon,
  Indicator,
  Label,
  Group,
  IconStyled as IconRoot,
} from './styled-component';
import { createCheckbox } from '@universa11y/checkbox';
import { createIcon } from '@universa11y/icon';
import React from 'react';
import { Wrapper } from '../Wrapper';

export const AccessibleCheckbox = createCheckbox({
  Root,
  Indicator,
  Icon,
  Label,
  Group,
});

const CheckIcon = createIcon({
  Root: IconRoot,
  viewBox: '0 0 24 24',
  d: 'M8.53115 15.1856L3.96198 10.744L2 12.6512L8.53115 19L22 5.9072L20.038 4L8.53115 15.1856Z',
});

export const Checkbox = () => {
  const [values, setValues] = React.useState([]);
  return (
    <Wrapper>
      <AccessibleCheckbox
        size="md"
        // isIndeterminate
        value="Label 1"
        aria-label="Label 1"
        accessibilityLabel="Checkbox"
        onChange={(isSelected: boolean) =>
          // eslint-disable-next-line no-console
          console.log(isSelected, '###')
        }
      >
        <AccessibleCheckbox.Indicator>
          <AccessibleCheckbox.Icon>
            <CheckIcon />
          </AccessibleCheckbox.Icon>
        </AccessibleCheckbox.Indicator>

        <AccessibleCheckbox.Label>Label 1</AccessibleCheckbox.Label>
      </AccessibleCheckbox>
      <AccessibleCheckbox.Group value={values} onChange={setValues}>
        <AccessibleCheckbox
          size="md"
          isInvalid={false}
          value="Label 1"
          aria-label="Label 1"
          accessibilityLabel="Checkbox"
          // eslint-disable-next-line no-console
          onChange={(isSelected: boolean) => console.log(isSelected)}
        >
          <AccessibleCheckbox.Indicator>
            <AccessibleCheckbox.Icon>
              <CheckIcon />
            </AccessibleCheckbox.Icon>
          </AccessibleCheckbox.Indicator>

          <AccessibleCheckbox.Label>Label 1</AccessibleCheckbox.Label>
        </AccessibleCheckbox>
        <AccessibleCheckbox
          size="md"
          aria-label="Label 2"
          value="Label 2"
          accessibilityLabel="Checkbox"
          // eslint-disable-next-line no-console
          onChange={(isSelected: boolean) => console.log(isSelected, '###')}
        >
          <AccessibleCheckbox.Indicator>
            <AccessibleCheckbox.Icon>
              <CheckIcon />
            </AccessibleCheckbox.Icon>
          </AccessibleCheckbox.Indicator>
          <AccessibleCheckbox.Label>Label 2</AccessibleCheckbox.Label>
        </AccessibleCheckbox>
      </AccessibleCheckbox.Group>
    </Wrapper>
  );
};

export default Checkbox;
