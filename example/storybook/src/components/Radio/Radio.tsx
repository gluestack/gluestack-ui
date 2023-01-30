import { Root, Icon, Group, Indicator, Label } from './styled-component';
import { createRadio } from '@universa11y/radio';
import { createIcon } from '@universa11y/icon';
import { Root as IconRoot } from '../Icon/styled-component';
import React from 'react';
import { Wrapper } from '../Wrapper';

const RadioTemp = createRadio({
  Root,
  Group,
  Icon,
  Indicator,
  Label,
});

const CircleIcon = createIcon({
  Root: IconRoot,
  viewBox: '0 0 24 24',
  d: 'M0 12C-2.34822e-08 13.5759 0.310389 15.1363 0.913445 16.5922C1.5165 18.0481 2.40042 19.371 3.51472 20.4853C4.62902 21.5996 5.95189 22.4835 7.4078 23.0866C8.86371 23.6896 10.4241 24 12 24C13.5759 24 15.1363 23.6896 16.5922 23.0866C18.0481 22.4835 19.371 21.5996 20.4853 20.4853C21.5996 19.371 22.4835 18.0481 23.0866 16.5922C23.6896 15.1363 24 13.5759 24 12C24 10.4241 23.6896 8.86371 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40042 18.0481 1.5165 16.5922 0.913446C15.1363 0.310389 13.5759 0 12 0C10.4241 0 8.86371 0.310389 7.4078 0.913446C5.95189 1.5165 4.62902 2.40042 3.51472 3.51472C2.40042 4.62902 1.5165 5.95189 0.913445 7.4078C0.310389 8.86371 -2.34822e-08 10.4241 0 12Z',
});

export const Radio = () => {
  const [values, setValues] = React.useState('Label 1');
  return (
    <Wrapper>
      <RadioTemp.Group
        isDisabled={false}
        isReadOnly={false}
        value={values}
        onChange={setValues}
      >
        <RadioTemp
          isDisabled={false}
          isInvalid={false}
          size="sm"
          value="Label 1"
          accessibilityLabel="Radio"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onChange={(nextValue: boolean) => {}}
        >
          <RadioTemp.Indicator>
            <RadioTemp.Icon
              sx={{
                // style: {
                //   color: '$primary600',
                // },
                // state: {
                //   focus: {
                //     style: {
                //       color: '$primary600',
                //     },
                //   },
                // },
                colorMode: {
                  dark: {
                    style: {
                      color: '$primary600',
                    },
                  },
                },
              }}
            >
              <CircleIcon />
            </RadioTemp.Icon>
          </RadioTemp.Indicator>
          <RadioTemp.Label>Label 1</RadioTemp.Label>
        </RadioTemp>
        <RadioTemp
          isDisabled={false}
          isInvalid={false}
          size="sm"
          value="Label 2"
          accessibilityLabel="Radio"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onChange={(nextValue: boolean) => {}}
        >
          <RadioTemp.Indicator>
            <RadioTemp.Icon>
              <CircleIcon />
            </RadioTemp.Icon>
          </RadioTemp.Indicator>
          <RadioTemp.Label>Label 2</RadioTemp.Label>
        </RadioTemp>
        <RadioTemp
          isDisabled={false}
          isInvalid={false}
          size="sm"
          value="Label 3"
          accessibilityLabel="Radio"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onChange={(isSelected: boolean) => {}}
        >
          <RadioTemp.Indicator>
            <RadioTemp.Icon>
              <CircleIcon />
            </RadioTemp.Icon>
          </RadioTemp.Indicator>
          <RadioTemp.Label>Label 3</RadioTemp.Label>
        </RadioTemp>
      </RadioTemp.Group>
    </Wrapper>
  );
};
